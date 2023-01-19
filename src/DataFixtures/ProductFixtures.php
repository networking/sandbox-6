<?php

namespace App\DataFixtures;

use App\Entity\ProductCategory;
use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;

class ProductFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager): void
    {
        $categories = [
            'Electronics',
            'Books',
            'Movies',
            'Music',
            'Fantasy',
            'Sports',
            'Toys',
            'Home',
            'Garden',
            'Tools',
            'Grocery',
            'Health',
            'Beauty',
            'Baby',
            'Clothing',
            'Shoes',
            'Jewelry',
            'Jackets',
            'Phones',
            ];

        foreach ($categories as $category) {

            $productCategory = new ProductCategory();
            $productCategory->setName($category);
            $this->addReference($category, $productCategory);
            $manager->persist($productCategory);
        }

        $products = [
            [
                'name' => 'Apple iPhone 12 Pro Max',
                'price' => 999.99,
                'type' => 'phone',
                'categories' => ['Electronics', 'Phones'],
            ],
            [
                'name' => 'Jeans Jacket',
                'price' => 49.99,
                'type' => 'jacket',
                'categories' => ['Clothing', 'Jackets'],
            ],
            [
                'name' => 'The Lord of the Rings',
                'price' => 19.99,
                'type' => 'book',
                'categories' => ['Books', 'Fantasy'],
            ]
        ];

        foreach ($products as $productConfig) {
            $product = new Product();
            $product->setName($productConfig['name']);
            $product->setPrice($productConfig['price']);
            $product->setType($productConfig['type']);
            foreach ($productConfig['categories'] as $category) {
                $product->addProductCategory($this->getReference($category));
            }
            $manager->persist($product);

        }
        $manager->flush();
    }

    public static function getGroups(): array
    {
       return ['product'];
    }
}
