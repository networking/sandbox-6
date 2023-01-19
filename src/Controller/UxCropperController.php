<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Cropperjs\Factory\CropperInterface;
use Symfony\UX\Cropperjs\Form\CropperType;

class UxCropperController extends AbstractController
{
    #[Route('/ux/cropper', name: 'app_ux_cropper')]
    public function index(CropperInterface $cropper, Request $request, $rootDir): Response
    {
        $crop = $cropper->createCrop($rootDir.'/public/img/screenshot.png');
        $crop->setCroppedMaxSize(2000, 1500);

        $form = $this->createFormBuilder(['crop' => $crop])
            ->add('crop', CropperType::class, [
                'public_url' => '/img/screenshot.png',
                'cropper_options' => [
                    'aspectRatio' => 2000 / 1500,
                ],
            ])
            ->add('submit', SubmitType::class)
            ->getForm()
        ;

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Get the cropped image data (as a string)
            $image = $crop->getCroppedImage();

            // Create a thumbnail of the cropped image (as a string)
            $crop->getCroppedThumbnail(200, 150);
            $now = (new \DateTime())->getTimestamp();
            $filename = 'screenshot_'.$now.'.png';
            file_put_contents($rootDir.'/public/img/'.$filename, $image);



        }

        return $this->renderForm('ux_cropper/index.html.twig', [
            'form' => $form,
            'cropped_image' => $filename ?? null,
        ]);
    }
}
