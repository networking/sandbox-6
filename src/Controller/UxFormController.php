<?php

namespace App\Controller;

use App\Form\UserType;
use Sonata\UserBundle\Model\UserManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;

class UxFormController extends AbstractController
{

    public function __construct(private readonly UserManagerInterface $userManager)
    {
    }

    #[Route('/ux/form', name: 'app_ux_form')]
    public function index(): Response
    {

        $form = $this->createForm(UserType::class, new User());

        if($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $this->userManager->updateUser($user);
        }

        return $this->render('ux_form/index.html.twig', [
            'form' => $form,
        ]);
    }
}
