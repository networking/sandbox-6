<?php

namespace App\Entity;

use Networking\InitCmsBundle\Entity\BaseUser;
use Networking\InitCmsBundle\Entity\Group;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Table(name: 'user')]
#[ORM\Entity]
class User extends BaseUser{

    #[ORM\Column(name: 'id', type: 'integer')]
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    protected $id;

    #[ORM\Column(name: 'admin_settings', type: 'json', nullable: true)]
    protected $adminSettings;

    #[ORM\Column(name: 'locale', type: 'string', length: 6, nullable: true)]
    protected $locale;

    #[ORM\Column(name: 'firstname', type: 'string', length: 255, nullable: true)]
    protected $firstname;

    #[ORM\Column(name: 'lastname', type: 'string', length: 255, nullable: true)]
    protected $lastname;

    #[ORM\Column(name: 'two_step_code', type: 'string', length: 255, nullable: true)]
    protected $twoStepVerificationCode;

    #[ORM\ManyToMany(targetEntity: Group::class)]
    #[ORM\JoinTable(name: 'user_user_group')]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: 'id', onDelete: 'CASCADE')]
    #[ORM\InverseJoinColumn(name: 'group_id', referencedColumnName: 'id', onDelete: 'CASCADE')]
    protected $groups;

}
