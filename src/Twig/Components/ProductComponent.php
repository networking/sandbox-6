<?php

namespace App\Twig\Components;

use App\Repository\ProductRepository;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('product')]
final class ProductComponent
{
    use DefaultActionTrait;


    #[LiveProp(writable: true)]
    public string $query = '';

    #[LiveProp(writable: true)]
    public string $category = '';

    public function __construct(private readonly ProductRepository $productRepository){}

    public function getProducts(): array
    {
        return $this->productRepository->search($this->query, $this->category);
    }


}
