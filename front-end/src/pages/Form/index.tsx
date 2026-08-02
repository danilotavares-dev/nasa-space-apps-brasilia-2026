import { Header } from '../../components/Header';

export function Form() {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;

    const formData = new FormData(formElement);
    const data: Record<string, any> = Object.fromEntries(formData.entries());
    data.contribuicoes = formData.getAll('contribuicoes');

    try {
      const response = await fetch(
        'https://nasa-space-apps-brasilia-2026.onrender.com/api/submit-form',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (result.success) {
        alert('Formulário salvo com sucesso!');
        formElement.reset();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Erro:', error);
      alert(
        'Erro ao conectar com o servidor. Verifique se o back-end está rodando.',
      );
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#07173F] overflow-x-hidden">
      <Header />

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col w-full max-w-5xl mx-auto px-5 py-16 gap-12 md:px-8 md:py-24 md:gap-16"
      >
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-sans font-bold text-3xl text-white sm:text-4xl md:text-[42px]">
            CONTE SOBRE VOCÊ
          </h1>

          <p className="font-overpass text-base text-white/70 md:text-lg">
            Queremos conhecer você e entender como podemos construir esse evento
            juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] items-center gap-x-5 gap-y-6 md:gap-y-8 w-full">
          <label
            htmlFor="nome"
            className="font-overpass text-white text-base md:text-[20px]"
          >
            Nome Completo:
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Nome Completo"
            className="text-black font-overpass bg-white p-3 w-full border-none outline-none rounded-sm"
          />

          <label
            htmlFor="email"
            className="font-overpass text-white text-base md:text-[20px]"
          >
            E-Mail:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-Mail"
            className="text-black font-overpass bg-white p-3 w-full border-none outline-none rounded-sm"
          />

          <label
            htmlFor="telefone"
            className="font-overpass text-white text-base md:text-[20px]"
          >
            Telefone:
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            placeholder="Telefone"
            className="text-black font-overpass bg-white p-3 w-full border-none outline-none rounded-sm"
          />

          <label
            htmlFor="universidade"
            className="font-overpass text-white text-base md:text-[20px]"
          >
            Universidade:
          </label>
          <input
            id="universidade"
            name="universidade"
            type="text"
            placeholder="Universidade"
            className="text-black font-overpass bg-white p-3 w-full border-none outline-none rounded-sm"
          />

          <label
            htmlFor="curso"
            className="font-overpass text-white text-base md:text-[20px]"
          >
            Curso/Semestre:
          </label>
          <input
            id="curso"
            name="curso"
            type="text"
            placeholder="Ex: Engenharia/3"
            className="text-black font-overpass bg-white p-3 w-full border-none outline-none rounded-sm"
          />
        </div>

        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col gap-5">
            <h2 className="font-overpass text-white text-base leading-relaxed md:text-[20px]">
              Você já participou da organização de algum evento?
            </h2>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="participacaoEventos"
                  id="participou-yes"
                  value="Sim"
                  className="cursor-pointer"
                />
                <label
                  htmlFor="participou-yes"
                  className="text-white font-overpass text-base cursor-pointer md:text-[18px]"
                >
                  Sim
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="participacaoEventos"
                  id="participou-no"
                  value="Não"
                  className="cursor-pointer"
                />
                <label
                  htmlFor="participou-no"
                  className="text-white font-overpass text-base cursor-pointer md:text-[18px]"
                >
                  Não
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-overpass text-white text-base leading-relaxed md:text-[20px]">
              Onde você gostaria de contribuir? (Pode marcar mais de uma)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
              {[
                'Coordenação',
                'Tecnologia',
                'Design',
                'Marketing e Comunicação',
                'Logística e Operações',
                'Parcerias e Patrocínios',
                'Fotografia / Audiovisual',
                'Outro',
              ].map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={area}
                    name="contribuicoes"
                    value={area}
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor={area}
                    className="text-white font-overpass text-base cursor-pointer md:text-[18px]"
                  >
                    {area}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-overpass text-white text-base leading-relaxed md:text-[20px]">
              Qual dessas áreas é sua principal preferência?
            </h2>
            <select
              name="preferenciaContribuicao"
              className="text-black font-overpass bg-white p-3 w-full border-none outline-none cursor-pointer rounded-sm"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione sua preferência principal...
              </option>
              <option value="Coordenação">Coordenação</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Design">Design</option>
              <option value="Marketing e Comunicação">
                Marketing e Comunicação
              </option>
              <option value="Logística e Operações">
                Logística e Operações
              </option>
              <option value="Parcerias e Patrocínios">
                Parcerias e Patrocínios
              </option>
              <option value="Fotografia / Audiovisual">
                Fotografia / Audiovisual
              </option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-overpass text-white text-base leading-relaxed md:text-[20px]">
              Quantas horas aproximadamente você consegue dedicar por semana?
            </h2>

            <div className="flex items-center gap-x-8 gap-y-4 flex-wrap">
              {['1-3h', '3-5h', '5-8h', '8-12h', '12h+'].map((hours) => (
                <div key={hours} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="cargaHoraria"
                    id={`horas-${hours}`}
                    value={hours}
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor={`horas-${hours}`}
                    className="text-white font-overpass text-base cursor-pointer md:text-[18px]"
                  >
                    {hours}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-overpass text-white text-base leading-relaxed md:text-[20px]">
              Você consegue participar de reuniões periódicas da equipe?
            </h2>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="participacaoReuniao"
                  id="reunioes-yes"
                  value="Sim"
                  className="cursor-pointer"
                />
                <label
                  htmlFor="reunioes-yes"
                  className="text-white font-overpass text-base cursor-pointer md:text-[18px]"
                >
                  Sim
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="participacaoReuniao"
                  id="reunioes-no"
                  value="Não"
                  className="cursor-pointer"
                />
                <label
                  htmlFor="reunioes-no"
                  className="text-white font-overpass text-base cursor-pointer md:text-[18px]"
                >
                  Não
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-overpass text-white text-base leading-relaxed md:text-[20px]">
              Por que você quer fazer parte da equipe organizadora do NASA Space
              Apps Challenge Brasília 2026?
            </h2>
            <textarea
              name="motivoParticipacao"
              rows={6}
              placeholder="Escreva sua resposta aqui..."
              className="text-black font-overpass bg-white p-3 w-full border-none outline-none resize-y rounded-sm"
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-start items-center w-full">
          <button
            type="submit"
            className="font-overpass font-bold text-black px-10 py-4 md:px-18 md:p-3 rounded-md bg-[#eafe07] hover:bg-[#0042A6] hover:text-white transition-colors cursor-pointer w-full sm:w-auto"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
