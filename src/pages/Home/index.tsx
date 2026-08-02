import { useNavigate } from 'react-router-dom';

import peaple from '../../assets/peaple.jpg';
import students from '../../assets/SpaceAppsStudents.jpg';
import PIA from '../../assets/PIA26185~orig.jpg';
import { Rocket } from '../../components/Rocket/index';
import { Networking } from '../../components/Networking/index';
import { Brain } from '../../components/Brain/index';
import { World } from '../../components/World/index';
import { Header } from '../../components/Header';
import { FAQ } from '../FAQ';
import { Footer } from '../../components/Footer';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Header />

      <main className="flex flex-col w-full bg-linear-to-br from-[#0042A6] to-[#07173F]">
        {/* HERO */}
        <section className="flex w-full min-h-dvh justify-center items-center px-5 py-20 md:px-6">
          <div className="flex flex-col justify-center items-start gap-12 md:gap-20 w-full max-w-340">
            <div className="flex flex-col gap-6 md:gap-10 w-full max-w-300">
              <h1 className="text-white font-sans font-bold text-4xl leading-tight sm:text-5xl md:text-[60px] md:leading-15">
                Faça parte da equipe organizadora do NASA Space Apps Challenge
                Brasília 2026!
              </h1>

              <h2 className="font-overpass font-normal text-lg leading-relaxed text-white sm:text-xl md:text-[32px] md:leading-normal">
                Estamos formando uma equipe multidisciplinar para transformar o
                NASA Space Apps Challenge em uma experiência incrível para
                participantes de Brasília.
              </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-7 text-lg md:text-xl text-black font-overpass font-bold w-full md:w-170">
              <button
                type="button"
                onClick={() => navigate('/Form')}
                className="flex justify-center min-h-14 w-full px-4 items-center bg-[#eafe07] hover:bg-[#0042A6] hover:text-white transition-colors rounded-md cursor-pointer text-lg md:text-[24px]"
              >
                Quero Participar
              </button>

              <a
                href="https://www.spaceappschallenge.org/"
                target="_blank"
                rel="noopener"
                className="flex justify-center min-h-14 items-center text-center w-full px-4 bg-[#eafe07] hover:bg-[#0042A6] hover:text-white transition-colors rounded-md cursor-pointer text-lg md:text-[24px]"
              >
                Saiba Mais Sobre o Evento
              </a>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center w-full bg-white px-5 py-20 md:px-6 md:py-30">
          <div className="flex flex-col justify-start items-start gap-20 md:gap-40 w-full max-w-340">
            <div className="flex flex-col gap-6 md:gap-10">
              <h2 className="font-sans font-bold text-4xl leading-tight text-[#0042A6] md:text-[60px]">
                O que é o NASA Space Apps Challenge?
              </h2>

              <h3 className="text-base leading-relaxed font-overpass font-normal md:text-[20px]">
                O NASA Space Apps Challenge é um hackathon internacional que
                reúne pessoas de diferentes áreas para desenvolver soluções para
                desafios relacionados à Terra e ao espaço utilizando dados e
                tecnologias abertas.
                <br />
                <br />
                Em 2026, Brasília fará parte novamente dessa iniciativa global —
                e estamos procurando pessoas para ajudar a tornar essa
                experiência possível.
              </h3>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-5 w-full">
              <div className="flex flex-col justify-center items-start gap-6 md:gap-10 w-full">
                <h2 className="font-sans font-normal text-2xl leading-tight text-[#E43700] md:text-[30px]">
                  UM EVENTO CONSTRUÍDO POR DIFERENTES TALENTOS
                </h2>

                <h3 className="text-base leading-relaxed font-overpass font-normal md:text-[20px]">
                  Um grande evento não acontece apenas com tecnologia.
                  Precisamos de pessoas com diferentes habilidades, experiências
                  e perspectivas para construir uma organização forte.
                </h3>
              </div>

              <img
                src={peaple}
                alt="Pessoas participando de um evento"
                className="w-full h-64 md:min-h-200 md:w-150 object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-15 w-full">
              <img
                src={students}
                alt="Estudantes participando de um evento"
                className="w-full h-64 md:min-h-200 md:w-150 object-cover rounded-md md:order-1"
              />

              <div className="flex flex-col justify-center items-start gap-6 md:gap-10 w-full md:order-2">
                <h2 className="font-sans font-normal text-2xl leading-tight text-[#E43700] md:text-[30px]">
                  MAIS DO QUE ORGANIZAR UM EVENTO
                </h2>

                <h3 className="text-base leading-relaxed font-overpass font-normal md:text-[20px]">
                  Fazer parte da organização significa colocar a mão na massa em
                  um projeto internacional, trabalhando com pessoas de
                  diferentes áreas e ajudando a construir uma experiência que
                  conecta ciência, tecnologia e inovação.
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full px-5 py-20 md:px-5 md:py-30 text-white">
          <div className="flex flex-col justify-center items-start gap-5 bg-[#07173F] border border-[#0960E1] w-full min-h-65 rounded-xl p-6">
            <div className="flex justify-center items-center gap-2">
              {Rocket}
              <h2 className="font-sans font-bold text-xl md:text-2xl">
                Experiência real
              </h2>
            </div>

            <h3 className="text-[#eafe07] font-overpass font-normal text-base md:text-[20px]">
              Participe da organização de um evento internacional de tecnologia
              e inovação.
            </h3>
          </div>

          <div className="flex flex-col justify-center items-start gap-5 bg-[#07173F] border border-[#0960E1] w-full min-h-65 rounded-xl p-6">
            <div className="flex justify-center items-center gap-2">
              {Networking}
              <h2 className="font-sans font-bold text-xl md:text-2xl">
                Networking
              </h2>
            </div>

            <h3 className="text-[#eafe07] font-overpass font-normal text-base md:text-[20px]">
              Conheça estudantes, profissionais, pesquisadores, empresas e
              comunidades.
            </h3>
          </div>

          <div className="flex flex-col justify-center items-start gap-5 bg-[#07173F] border border-[#0960E1] w-full min-h-65 rounded-xl p-6">
            <div className="flex justify-center items-center gap-2">
              {Brain}
              <h2 className="font-sans font-bold text-xl md:text-2xl">
                Desenvolvimento
              </h2>
            </div>

            <h3 className="text-[#eafe07] font-overpass font-normal text-base md:text-[20px]">
              Desenvolva liderança, comunicação, organização e gestão de
              projetos.
            </h3>
          </div>

          <div className="flex flex-col justify-center items-start gap-5 bg-[#07173F] border border-[#0960E1] w-full min-h-65 rounded-xl p-6">
            <div className="flex justify-center items-center gap-2">
              {World}
              <h2 className="font-sans font-bold text-xl md:text-2xl">
                Impacto
              </h2>
            </div>

            <h3 className="text-[#eafe07] font-overpass font-normal text-base md:text-[20px]">
              Contribua para levar ciência, tecnologia e inovação para a
              comunidade de Brasília.
            </h3>
          </div>
        </section>

        <section className="flex w-full px-5 pb-20 md:px-5 md:pb-30 text-white">
          <div className="flex flex-col w-full justify-center items-start gap-8 p-6 md:gap-10 md:p-10 border border-[#0960E1] rounded-xl bg-[#07173F]">
            <h2 className="font-sans font-bold text-3xl leading-tight md:text-[34px]">
              Quem estamos procurando?
            </h2>

            <h3 className="font-overpass text-base leading-relaxed text-[#eafe07] md:text-[20px]">
              - tenham vontade de construir algo;
              <br />- sejam responsáveis;
              <br />- saibam trabalhar em equipe;
              <br />- tenham iniciativa;
              <br />- estejam dispostas a aprender;
              <br />- consigam assumir responsabilidades;
              <br />- tenham disponibilidade para participar da organização.
            </h3>
          </div>
        </section>

        <FAQ />

        <section className="flex flex-col justify-center items-center gap-12 md:gap-20 p-6 md:p-5 min-h-125 md:h-150 w-full bg-black text-white">
          <div className="flex flex-col justify-center items-center gap-5 text-center">
            <h1 className="font-sans font-bold text-3xl leading-tight md:text-[42px]">
              Quer construir isso com a gente?
            </h1>

            <h2 className="font-overpass font-normal text-base leading-relaxed md:text-[20px]">
              Estamos procurando pessoas comprometidas e multidisciplinares para
              fazer parte da equipe organizadora do NASA Space Apps Challenge
              Brasília 2026.
            </h2>
          </div>

          <div className="flex justify-center items-center w-full">
            <button
              type="button"
              onClick={() => navigate('/Form')}
              className="bg-[#eafe07] px-6 py-4 text-black font-overpass font-bold rounded-md cursor-pointer hover:bg-[#0042A6] hover:text-white transition-colors text-sm md:text-base"
            >
              QUERO FAZER PARTE DA EQUIPE →
            </button>
          </div>
        </section>

        <img
          src={PIA}
          alt="Imagem da NASA"
          className="w-full h-64 md:h-130 object-cover"
        />
      </main>

      <Footer />
    </div>
  );
}
