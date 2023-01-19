<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UxComponentController extends AbstractController
{
    #[Route('/ux/component', name: 'app_ux_component')]
    public function index(): Response
    {
        return $this->render('ux_component/index.html.twig', [
            'controller_name' => 'UxComponentController',
        ]);
    }
}
