<?php

namespace App\Controller;

use App\Entity\Competence;
use App\Form\CompetenceType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CompetenceController extends AbstractController
{
    /**
     * @Route("/competence", name="competence")
     * @IsGranted("ROLE_ADMIN")
     */
    public function insert(Request $request): Response
    {
        $compet = new Competence();
        $formu = $this->createForm(CompetenceType::class,$compet);
        $formu->handleRequest($request);
        if ($formu->isSubmitted() && $formu->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($compet);
            $em->flush();
            return $this->redirectToRoute('stagiaire');
        }
        return $this->render('competence/index.html.twig', [
            'form' => $formu->createView(),
        ]);
    }
}
