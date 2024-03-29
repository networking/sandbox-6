<?php

namespace App\Form;

use App\Entity\Page;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Autocomplete\Form\AsEntityAutocompleteField;
use Symfony\UX\Autocomplete\Form\ParentEntityAutocompleteType;

#[AsEntityAutocompleteField]
class PageAutocompleteField extends AbstractType
{
    public function __construct(private readonly RequestStack $requestStack){}
    public function configureOptions(OptionsResolver $resolver): void
    {
        $locale = $this->requestStack->getCurrentRequest()->getLocale();
        $filter = function(QueryBuilder $qb, string $query, EntityRepository $repository) use ($locale) {
            $alias = $qb->getRootAliases()[0];
            return $qb
                ->where($alias.'.pageName LIKE :name')
                ->andwhere($alias.'.locale LIKE :locale')
                ->setParameter('locale', $locale)
                ->setParameter('name', $query)
                ;
        };

        $resolver->setDefaults([
            'class' => Page::class,
            'placeholder' => 'Choose a Page',
            'filter_query' => $filter,
        ]);
    }

    public function getParent(): string
    {
        return ParentEntityAutocompleteType::class;
    }
}
