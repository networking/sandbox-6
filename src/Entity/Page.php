<?php
namespace App\Entity;

use Gedmo\Mapping\Annotation as Gedmo;
use Networking\InitCmsBundle\Entity\BasePage;
use Doctrine\ORM\Mapping as ORM;
use Networking\InitCmsBundle\Model\ContentRoute;


#[Gedmo\Tree(type: 'materializedPath')]
#[Gedmo\Loggable]
#[ORM\Entity()]
#[ORM\HasLifecycleCallbacks()]
#[ORM\Table(name: 'page', uniqueConstraints: [])]
#[ORM\UniqueConstraint(name: 'path_idx', columns: ['path', 'locale'])]
class Page extends BasePage{

    #[ORM\Column(type: 'integer')]
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'IDENTITY')]
    protected $id;

    /**
     * @var ContentRoute
     */
    #[ORM\OneToOne(targetEntity: \Networking\InitCmsBundle\Entity\ContentRoute::class, cascade: ['remove', 'persist'])]
    #[ORM\JoinColumn(name: 'content_route_id', referencedColumnName: 'id')]
    protected $contentRoute;

    #[ORM\OneToMany(mappedBy: 'page', targetEntity: \Networking\InitCmsBundle\Entity\LayoutBlock::class, cascade: ['remove', 'persist'], orphanRemoval: true)]
    #[ORM\OrderBy(['sortOrder' => 'ASC'])]
    protected $layoutBlock;


    #[ORM\OneToMany(mappedBy: 'page', targetEntity: \Networking\InitCmsBundle\Entity\MenuItem::class, cascade: ['remove'], orphanRemoval: true)]
    protected $menuItem;


    #[ORM\OneToMany(mappedBy: 'page', targetEntity: \Networking\InitCmsBundle\Entity\PageSnapshot::class, cascade: ['remove'], orphanRemoval: true)]
    #[ORM\OrderBy(['version' => 'DESC'])]
    protected $snapshots;

    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: \App\Entity\Page::class)]
    protected $children;

    #[ORM\ManyToOne(targetEntity: \App\Entity\Page::class)]
    #[ORM\JoinColumn(name: 'alias_id', referencedColumnName: 'id', onDelete: 'SET NULL')]
    protected $alias;

    #[ORM\ManyToOne(targetEntity: \App\Entity\Page::class, cascade: ['persist'], inversedBy: 'children')]
    #[ORM\JoinColumn(name: 'parent_id', referencedColumnName: 'id', onDelete: 'SET NULL')]
    #[Gedmo\TreeParent]
    protected $parent;

    #[ORM\ManyToMany(targetEntity: \App\Entity\Page::class, inversedBy: 'translations', cascade: ['persist'])]
    #[ORM\JoinTable(name: 'page_translation')]
    #[ORM\JoinColumn(name: 'translation_id', referencedColumnName: 'id')]
    #[ORM\InverseJoinColumn(name: 'original_id', referencedColumnName: 'id')]
    protected $originals;

    #[ORM\ManyToMany(targetEntity: \App\Entity\Page::class, mappedBy: 'originals', cascade: ['persist'])]
    protected $translations;
}
