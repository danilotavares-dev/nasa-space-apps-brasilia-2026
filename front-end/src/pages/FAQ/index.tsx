export const FAQ = () => {
  return (
    <div className="w-full flex flex-col items-center py-20 px-5">
      <div className="flex flex-col w-full max-w-3xl gap-10">
        <h2 className="font-sand font-bold text-[36px] text-white text-center">
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col gap-6">
          <div className="bg-white/5 p-6 rounded-lg border-l-4 border-[#eafe07] flex flex-col gap-2">
            <h3 className="font-overpass font-bold text-white text-[20px]">
              Preciso ser estudante de tecnologia?
            </h3>
            <p className="font-overpass text-gray-300 text-[16px]">
              Não. O evento precisa de pessoas de diversas áreas.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border-l-4 border-[#eafe07] flex flex-col gap-2">
            <h3 className="font-overpass font-bold text-white text-[20px]">
              Preciso ter experiência em eventos?
            </h3>
            <p className="font-overpass text-gray-300 text-[16px]">
              Não. Experiência é um diferencial, mas não é obrigatória.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border-l-4 border-[#eafe07] flex flex-col gap-2">
            <h3 className="font-overpass font-bold text-white text-[20px]">
              Quais são os dias do evento?
            </h3>
            <p className="font-overpass text-gray-300 text-[16px]">
              Dias 14-15 de Novembro de 2026 (2 dias)
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border-l-4 border-[#eafe07] flex flex-col gap-2">
            <h3 className="font-overpass font-bold text-white text-[20px]">
              Quanto tempo preciso dedicar?
            </h3>
            <p className="font-overpass text-gray-300 text-[16px]">
              A equipe terá reuniões e tarefas periódicas. A disponibilidade
              será considerada durante o processo de seleção.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border-l-4 border-[#eafe07] flex flex-col gap-2">
            <h3 className="font-overpass font-bold text-white text-[20px]">
              O trabalho é voluntário?
            </h3>
            <p className="font-overpass text-gray-300 text-[16px]">
              Sim. A organização do NASA Space Apps Challenge Brasília é uma
              iniciativa 100% voluntária, construída por entusiastas de
              tecnologia, ciência e inovação.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border-l-4 border-[#eafe07] flex flex-col gap-2">
            <h3 className="font-overpass font-bold text-white text-[20px]">
              Onde acontecerá o evento?
            </h3>
            <p className="font-overpass text-gray-300 text-[16px]">
              Em Brasília. O local exato será confirmado e divulgado em breve.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border-l-4 border-[#eafe07] flex flex-col gap-2">
            <h3 className="font-overpass font-bold text-white text-[20px]">
              Quantas pessoas fazem parte da equipe atualmente?
            </h3>
            <p className="font-overpass text-gray-300 text-[16px]">
              No momento, o projeto é tocado integralmente por uma única pessoa
              (desenvolvimento, organização e gestão). Como o escopo é grande,
              as portas estão abertas para quem quiser entrar, por isso as
              inscrições para novos membros estão ativas logo acima.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
