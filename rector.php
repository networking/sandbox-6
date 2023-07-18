<?php

declare(strict_types=1);

use Rector\CodeQuality\Rector\Class_\InlineConstructorDefaultToPropertyRector;
use Rector\Config\RectorConfig;
use Rector\Set\ValueObject\LevelSetList;
use Rector\Doctrine\Set\DoctrineSetList;
use Rector\Symfony\Set\SymfonySetList;
use Rector\Symfony\Set\SensiolabsSetList;

return static function (RectorConfig $rectorConfig): void {
    $rectorConfig->paths([
        __DIR__ . '/config',
        __DIR__ . '/migrations',
        __DIR__ . '/public',
        __DIR__ . '/src',
        __DIR__ . '/tests',
        __DIR__ . '/templates',
    ]);

    // register a single rule
    $rectorConfig->rules(
        [

        InlineConstructorDefaultToPropertyRector::class,
        \Rector\TypeDeclaration\Rector\ClassMethod\ReturnTypeFromStrictNativeCallRector::class,
        \Rector\CodeQuality\Rector\ClassMethod\ReturnTypeFromStrictScalarReturnExprRector::class,
        \Rector\TypeDeclaration\Rector\StmtsAwareInterface\DeclareStrictTypesRector::class,
        ]
    );

    $rectorConfig->sets([
        DoctrineSetList::ANNOTATIONS_TO_ATTRIBUTES,
        SymfonySetList::ANNOTATIONS_TO_ATTRIBUTES,
        SensiolabsSetList::FRAMEWORK_EXTRA_61,
        LevelSetList::UP_TO_PHP_81,
        \Rector\Symfony\Set\TwigLevelSetList::UP_TO_TWIG_240,
        \Rector\Symfony\Set\JMSSetList::ANNOTATIONS_TO_ATTRIBUTES,
    ]);
    $rectorConfig->disableParallel();
};
