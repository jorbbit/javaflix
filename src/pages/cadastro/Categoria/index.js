/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descrição, etc....
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor do input'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
      console.log('alo alo w');
      const URL_TOP = 'http://localhost:8080/categorias';

      fetch(URL_TOP)
        .then(async (respostaDoServidor) => {
            const resposta = await respostaDoServidor.json();
            setCategorias([
                ...resposta,
            ]);
        });

      /* setTimeout(() => {
        setCategorias([
            ...categorias,
            {
                id: 1,
                nome: 'Front End',
                descricao: 'Uma categoria bacanuda',
                cor: '#cbd1fdf',
              },
              {
                id: 2,
                nome: 'Back End',
                descricao: 'Outra categoria da hora',
                cor: '#cbd1fdf',
              },
          ]);
      }, 4 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubimit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
            Loading....
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
