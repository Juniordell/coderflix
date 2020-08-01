import React, { useState, useEffect } from 'react'

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
import { Link } from 'react-router-dom'

export default function Categoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
    code: '',
  }

  const [categories, setCategories] = useState([])
  const [values, setValues] = useState(initialValues)

  function handleSubmit(event) {
    event.preventDefault()

    setCategories([...categories, values])
    setValues(initialValues)
  }

  function setValue(key, value) {
    setValues({ ...values, [key]: value })
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value)
  }

  useEffect(() => {
    console.log('ola');
    const URL = 'http://localhost:8080/categoria'
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
          return <li key={index}>{category.name}</li>
        })}
      </ul>

      <Link to='/'>
        Ir para home
      </Link>
    </PageDefault>
  )
}