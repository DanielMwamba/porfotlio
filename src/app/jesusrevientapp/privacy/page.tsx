import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Jésus Revient TV",
  description:
    "Politique de confidentialité de l'application mobile Jésus Revient TV. Aucune donnée personnelle n'est collectée.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="content-container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="text-black hover:text-gray-600 transition-colors inline-flex items-center gap-2 mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Retour au portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Politique de Confidentialité - Jésus Revient TV
            </h1>
            <p className="text-gray-600">
              <strong>Dernière mise à jour :</strong> 12 février 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jésus Revient TV (&quot;nous&quot;, &quot;notre&quot;,
                &quot;l&apos;application&quot;) respecte votre vie privée et
                s&apos;engage à protéger vos données personnelles. Cette
                politique de confidentialité explique comment nous traitons les
                informations lorsque vous utilisez notre application mobile.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Collecte de Données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>
                  Aucune donnée personnelle n&apos;est collectée par notre
                  application.
                </strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jésus Revient TV ne collecte, ne stocke, ni ne transmet aucune
                information personnelle identifiable concernant les
                utilisateurs. L&apos;application fonctionne de manière
                entièrement locale sur votre appareil.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Données Non Collectées
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre application ne collecte pas :
              </p>
              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>
                    Noms, adresses e-mail ou autres informations
                    d&apos;identification
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Données de localisation</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Informations de paiement ou financières</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Historique de navigation ou de recherche</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Photos, vidéos ou fichiers personnels</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Données de contacts</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Identifiants d&apos;appareil uniques</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Cookies ou technologies de suivi</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Services Tiers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre application utilise les services suivants pour fournir du
                contenu vidéo :
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Cloudflare Stream</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4 ml-4">
                  <li>
                    <strong>Usage :</strong> Diffusion de contenu vidéo
                  </li>
                  <li>
                    <strong>Données :</strong> Cloudflare peut collecter des
                    données techniques standard (adresse IP, type
                    d&apos;appareil) pour la diffusion vidéo
                  </li>
                  <li>
                    <strong>Politique :</strong>{" "}
                    <a
                      href="https://www.cloudflare.com/privacypolicy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Politique de confidentialité de Cloudflare
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Strapi (CMS)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4 ml-4">
                  <li>
                    <strong>Usage :</strong> Gestion et récupération du contenu
                    (vidéos, catégories)
                  </li>
                  <li>
                    <strong>Données :</strong> Aucune donnée personnelle
                    n&apos;est transmise via les requêtes API
                  </li>
                  <li>
                    <strong>Politique :</strong> Les données sont hébergées sur
                    des serveurs Strapi tiers
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                <strong>Note :</strong> Ces services tiers ont leurs propres
                politiques de confidentialité. Nous vous encourageons à les
                consulter pour comprendre comment ils traitent vos données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Utilisation des Données
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Comme nous ne collectons aucune donnée personnelle, aucune
                donnée n&apos;est utilisée, partagée ou vendue à des tiers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Sécurité</h2>
              <p className="text-gray-700 leading-relaxed">
                Bien que nous ne collections pas de données, nous nous engageons
                à maintenir la sécurité de notre application et à protéger votre
                expérience utilisateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Permissions de l&apos;Application
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre application peut demander les permissions suivantes pour
                fonctionner correctement :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
                <li>
                  <strong>Accès Internet :</strong> Nécessaire pour charger le
                  contenu vidéo depuis nos serveurs
                </li>
                <li>
                  <strong>Lecture vidéo :</strong> Pour afficher et lire les
                  vidéos dans l&apos;application
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Aucune de ces permissions n&apos;est utilisée pour collecter des
                données personnelles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Modifications de cette Politique
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de
                confidentialité à tout moment. Toute modification sera publiée
                sur cette page avec une date de mise à jour révisée.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Vos Droits
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Comme nous ne collectons aucune donnée personnelle, il n&apos;y
                a aucune donnée à supprimer, modifier ou exporter. Vous pouvez
                simplement désinstaller l&apos;application à tout moment si vous
                souhaitez cesser de l&apos;utiliser.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant cette politique de
                confidentialité, vous pouvez nous contacter via :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Application :</strong> Jésus Revient TV
                </li>
                <li>
                  <strong>Développeur :</strong> dan-dev
                </li>
                <li>
                  <strong>Package :</strong> com.dandev.jesusrevienttv
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Consentement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                En utilisant Jésus Revient TV, vous acceptez cette politique de
                confidentialité. Si vous n&apos;acceptez pas cette politique,
                veuillez ne pas utiliser l&apos;application.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 italic">
                <strong>Temple de Gloire</strong> - Partager la Parole de Dieu à
                travers la technologie moderne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
