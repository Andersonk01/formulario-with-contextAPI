export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="w-full h-full bg-red-200 flex justify-center items-center p-3">
        {/* containar main */}
        <div className="bg-gray-100 p-8 w-full h-full max-w-4xl rounded-3xl">
          <h1 className="text-2xl font-semibold mb-4">
            Context em React: Exemplo de Utilização
          </h1>

          <p className="text-gray-700 mb-4">
            Neste repositório, vou compartilhar um exemplo prático de como
            utilizar o hook
            <code className="bg-gray-200 px-1 rounded">useContext</code>
            em React para criar uma apresentação de desenvolvedor dinâmica. O
            <code className="bg-gray-200 px-1 rounded">useContext</code>é uma
            ferramenta poderosa que nos permite compartilhar e acessar dados
            entre componentes sem a necessidade de passar props manualmente
            através da árvore de componentes.
          </p>

          <h2 className="text-xl font-medium mb-2 mt-6">O que é useContext?</h2>
          <p className="text-gray-700 mb-4">
            O hook
            <code className="bg-gray-200 px-1 rounded">useContext</code>é parte
            da biblioteca de React Hooks e é utilizado para acessar o contexto
            de um componente. Ele é especialmente útil em situações em que você
            deseja evitar ❝prop drilling❞ (passagem de props através de vários
            componentes) e compartilhar dados que são relevantes para vários
            componentes em diferentes níveis da hierarquia.
          </p>

          <h2 className="text-xl font-medium mb-2 mt-6">
            Exemplo de Utilização
          </h2>
          <p className="text-gray-700 mb-4">
            Neste exemplo, criei um componente de apresentação de desenvolvedor
            que exibe informações sobre um desenvolvedor com base em um
            contexto. O contexto é criado utilizando o
            <code className="bg-gray-200 px-1 rounded">useContext</code>,
            permitindo que as informações do desenvolvedor sejam acessadas em
            vários componentes sem precisar serem passadas como props.
          </p>
          <p className="text-gray-700 mb-4">
            O código demonstrado aqui utiliza o
            <code className="bg-gray-200 px-1 rounded">useContext</code>
            para acessar os dados do contexto e renderizar uma apresentação
            dinâmica de desenvolvedor. A apresentação inclui detalhes como nome,
            linguagem preferida, tecnologias, perfil do GitHub, perfil do
            LinkedIn e experiência.
          </p>
          <p className="text-gray-700">
            Ao utilizar o
            <code className="bg-gray-200 px-1 rounded">useContext</code>, o
            código se torna mais limpo e mais eficiente, uma vez que evita a
            propagação manual de props entre vários componentes intermediários.
          </p>
        </div>
      </div>
    </main>
  );
}
