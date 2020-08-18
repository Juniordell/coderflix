import React, { useState, useEffect } from 'react'

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom'
import useForm from '../../../hooks/useForm'

export default function Categoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
    code: '',
  }

  const [categories, setCategories] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    setCategories([...categories, values])
    clearForm(initialValues)
  }

  const { handleChange, values, clearForm } = useForm(initialValues)

  useEffect(() => {
    console.log('ola');
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3000'
      : 'https://coderflix.herokuapp.com/categoria'
      
    fetch(URL)
    .then(async (response) => {
      const resp = await response.json()
      setCategories([
        ...resp,
      ])
    })

  }, [])

  return (
    <PageDefault>

      <form onSubmit={handleSubmit}>
        <h1>Nova categoria: {values.name}</h1>
        <FormField
          id="name"
          label="Nome da Categoria"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          id="description"
          label="Descrição da categoria"
          name="description"
          type="textarea"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          name="color"
          type="color"
          value={values.color}
          onChange={handleChange}
          className="color-categ"
        />

          <Button>Cadastrar</Button>
      </form>

      { categories.length === 0 && (  
          <div>
            Loading...
          </div>
      )}

      <ul>
        {categories.map((category, index) => {
          return <li key={index}>{category.titulo}</li>
        })}
      </ul>

      <Link to='/'>
        Ir para home
      </Link>
    </PageDefault>
  )
}