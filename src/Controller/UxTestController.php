<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class UxTestController extends AbstractController
{
    #[Route('/ux/test', name: 'app_ux_test')]
    public function index(): Response
    {
        return $this->render('ux_test/index.html.twig', [
            'controller_name' => 'UxTestController',
        ]);
    }

    #[Route('/ux/chart', name: 'app_ux_chart')]
    public function chart(ChartBuilderInterface $chartBuilder): Response
    {
        $chart = $chartBuilder->createChart(Chart::TYPE_BAR);

        $chart->setData([
            'labels' => [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            'datasets' => [
                [
                    'label' => 'My First dataset',
                    'backgroundColor' => 'rgb(255, 99, 132)',
                    'borderColor' => 'rgb(255, 99, 132)',
                    'data' => [0, 10, 5, 2, 20, 30, 45],
                ],
                [
                    'label' => 'My second dataset',
                    'backgroundColor' => 'blue',
                    'borderColor' => 'rgb(255, 99, 132)',
                    'data' => [15, 10, 5, 2, 20, 30, 95],
                ],
            ],
        ]);

        $chart->setOptions([
            'responsive' => true,
            'plugins' => [
                'legend' => [
                    'position' => 'top',
                ],
            ],
            'scales' => [
                'x' => [
                    'stacked' => false,
                ],
                'y' => [
                    'stacked' => false,
                    'suggestedMin' => 0,
                ],
            ],
        ]);


        $polar = $chartBuilder->createChart(Chart::TYPE_POLAR_AREA);

        $polar->setData([
            'labels' => ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            'datasets' => [
                [
                    'label' => '# of Votes',
                    'data' => [2, 9, 3, 5, 2, 3],
                    'backgroundColor' => [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                ]
            ],
        ]);
        $polar->setOptions([
            'responsive' => true,
            'scale' => [
                'ticks' => [
                    'beginAtZero' => true,
                ],
                'pointLabels' => [
                    'font' => [
                        'size' => 18,
                    ],
                ],
            ],
            'plugins' => [
                'legend' => [
                    'position' => 'top',
                ],
                'title' => [
                    'display' => true,
                    'text' => 'Chart.js Polar Area Chart',
                ],
            ],
        ]);


        return $this->render('ux_test/cart.html.twig', [
            'chart' => $chart,
            'polar' => $polar,
        ]);
    }
}
