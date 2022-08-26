import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../../components/main/subcomponent/Card'
export const Favorite = () => {
    const {fav} = useSelector(store => store.fav)
    console.log(fav)
  return (
    <section>
    <ul className="card-wrapper">
      {fav.map((es) => <Card estate={es} key={es.id} />)}
    </ul>
  </section>
  )
}
