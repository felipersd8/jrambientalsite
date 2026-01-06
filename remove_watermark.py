#!/usr/bin/env python3
"""
Script para remover marca d'água (canto inferior direito) de todas as imagens
"""
import os
from PIL import Image

def remove_watermark(image_path, crop_percent=5):
    """
    Remove a marca d'água recortando uma porcentagem do canto inferior direito
    crop_percent: porcentagem a ser cortada (padrão 5%)
    """
    try:
        # Abrir a imagem
        img = Image.open(image_path)
        width, height = img.size
        
        # Calcular quantos pixels cortar (5% de largura e altura)
        crop_width = int(width * crop_percent / 100)
        crop_height = int(height * crop_percent / 100)
        
        # Recortar: (left, top, right, bottom)
        # Removendo do canto inferior direito
        new_width = width - crop_width
        new_height = height - crop_height
        
        cropped = img.crop((0, 0, new_width, new_height))
        
        # Salvar (sobrescrever)
        cropped.save(image_path, 'PNG', optimize=True)
        print(f"✓ Processado: {os.path.basename(image_path)} ({width}x{height} → {new_width}x{new_height})")
        return True
    except Exception as e:
        print(f"✗ Erro ao processar {image_path}: {e}")
        return False

def main():
    images_dir = "public/images"
    
    # Lista de imagens para processar
    image_files = [
        "hero-home.png",
        "hero-jr-campo-360.png",
        "hero-servicos.png",
        "jr-campo-360.png",
        "card-1.png",
        "card-2.png",
        "card-3.png",
        "card-4.png",
        "passo-1.png",
        "passo-2.png",
        "passo-3.png",
    ]
    
    print("Removendo marca d'água das imagens...")
    print("-" * 50)
    
    processed = 0
    for img_file in image_files:
        img_path = os.path.join(images_dir, img_file)
        if os.path.exists(img_path):
            if remove_watermark(img_path, crop_percent=5):
                processed += 1
        else:
            print(f"⚠ Não encontrado: {img_file}")
    
    print("-" * 50)
    print(f"Processadas: {processed}/{len(image_files)} imagens")

if __name__ == "__main__":
    try:
        main()
    except ImportError:
        print("ERRO: Pillow (PIL) não está instalado.")
        print("Instale com: pip3 install Pillow")
        exit(1)
