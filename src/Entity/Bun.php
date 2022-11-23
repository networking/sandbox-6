<?php

namespace App\Entity;

use App\Repository\BunRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BunRepository::class)]
class Bun
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
