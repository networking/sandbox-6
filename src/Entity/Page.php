<?php
namespace App\Entity;

use Doctrine\Common\Collections\Collection;
use Gedmo\Mapping\Annotation as Gedmo;
use Networking\InitCmsBundle\Entity\BasePage;
use Doctrine\ORM\Mapping as ORM;
use Networking\InitCmsBundle\Entity\LayoutBlock;
use Networking\InitCmsBundle\Entity\MenuItem;
use Networking\InitCmsBundle\Entity\PageSnapshot;
use Networking\InitCmsBundle\Model\ContentRouteInterface;
use Networking\InitCmsBundle\Model\PageInterface;

#[Gedmo\Tree(type: 'materializedPath')]
#[Gedmo\Loggable]
#[ORM\Entity()]
#[ORM\HasLifecycleCallbacks()]
#[ORM\Table(name: 'page', uniqueConstraints: [])]
#[ORM\UniqueConstraint(name: 'path_idx', columns: ['path', 'locale'])]
class Page extends BasePage
{
    #[ORM\Column(type: 'integer')]
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'IDENTITY')]
    protected $id;

    #[ORM\OneToOne(targetEntity: \Networking\InitCmsBundle\Entity\ContentRoute::class, cascade: ['remove', 'persist'])]
    #[ORM\JoinColumn(name: 'content_route_id', referencedColumnName: 'id')]
    protected ?ContentRouteInterface $contentRoute = null;

    #[ORM\OneToMany(mappedBy: 'page', targetEntity: LayoutBlock::class, cascade: ['remove', 'persist'], orphanRemoval: true)]
    #[ORM\OrderBy(['sortOrder' => 'ASC'])]
    protected Collection $layoutBlock;


    #[ORM\OneToMany(mappedBy: 'page', targetEntity: MenuItem::class, cascade: ['remove'], orphanRemoval: true)]
    protected Collection $menuItem;


    #[ORM\OneToMany(mappedBy: 'page', targetEntity: PageSnapshot::class, cascade: ['remove'], orphanRemoval: true)]
    #[ORM\OrderBy(['version' => 'DESC'])]
    protected Collection $snapshots;

    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: Page::class)]
    protected Collection|array $children;

    #[ORM\ManyToOne(targetEntity: Page::class)]
    #[ORM\JoinColumn(name: 'alias_id', referencedColumnName: 'id', onDelete: 'SET NULL')]
    protected ?PageInterface $alias = null;

    #[ORM\ManyToOne(targetEntity: Page::class, cascade: ['persist'], inversedBy: 'children')]
    #[ORM\JoinColumn(name: 'parent_id', referencedColumnName: 'id', onDelete: 'SET NULL')]
    #[Gedmo\TreeParent]
    protected PageInterface|int|null $parent = null;

    #[ORM\ManyToMany(targetEntity: Page::class, inversedBy: 'translations', cascade: ['persist'])]
    #[ORM\JoinTable(name: 'page_translation')]
    #[ORM\JoinColumn(name: 'translation_id', referencedColumnName: 'id')]
    #[ORM\InverseJoinColumn(name: 'original_id', referencedColumnName: 'id')]
    protected Collection|array $originals;

    #[ORM\ManyToMany(targetEntity: Page::class, mappedBy: 'originals', cascade: ['persist'])]
    protected Collection|array $translations;
}
