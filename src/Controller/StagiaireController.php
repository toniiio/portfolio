<?php

namespace App\Controller;

use App\Entity\Stagiaire;
use App\Form\StagiaireType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StagiaireController extends AbstractController
{
    /**
     * @Route("/", name="stagiaire")
     */
    public function index(): Response
    {
        $em = $this->getDoctrine()->getManager();
        $stagiaire = $em->getRepository(Stagiaire::class)->findAll();
        return $this->render('stagiaire/index.html.twig', [
            'stagiaire' => $stagiaire,
        ]);
    }

    /**
     * @Route("/insert", name="stagiaire_insert")
     *
     */
    public function insert(Request $request)
    {
        $stagiaire = new Stagiaire();
        $form = $this->createForm(StagiaireType::class, $stagiaire);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($stagiaire);
            $em->flush();
            return $this->redirectToRoute('stagiaire');
        }
        return $this->render('stagiaire/insert.html.twig', [
            'form' => $form->createView(),
        ]);

    }
    /**
     * @Route("/{id}/edit", name="stagiaire_edit", methods={"GET","POST"})
     *
     */
    public function edit(Request $request, Stagiaire $stagiaire)
    {
        $form = $this->createForm(StagiaireType::class, $stagiaire);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute('stagiaire');
        }
        return $this->render('stagiaire/edit.html.twig', [
            'stagiaire' => $stagiaire,
            'form' => $form->createView(),
        ]);
    }
    /**
     * @Route("/{id}/", name="stagiaire_delete", methods={"DELETE"})
     */
    public function delete(Request $request,Stagiaire $stagiaire)
    {
        if ($this->isCsrfTokenValid('delete' . $stagiaire->getId(), $request->request->get('_token')))
        {
            $em = $this->getDoctrine()->getManager();
            $em->remove($stagiaire);
            $em->flush();

        }
        return $this->redirectToRoute('stagiaire');
    }
}



