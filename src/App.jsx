import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import { addFav, fetchCatsFact } from './assets/store/actions/actions'


const Wrapper=styled.div`
margin:0 auto;
width:40%;
background:#FDF0D1;
margin-top:30vh;
padding:50px;
border-radius:10px;
-webkit-box-shadow: -31px -21px 29px -3px rgba(185,189,125,1);
-moz-box-shadow: -31px -21px 29px -3px rgba(185,189,125,1);
box-shadow: -31px -21px 29px -3px rgba(185,189,125,1);
letter-spacing:1px
`
const Links=styled.nav`
display:flex;
justify-content:center;
text-decoration:none;
gap:2rem;
font-size:28px;

`
const Buttons=styled.div`
display:flex;
justify-content:flex-end;
gap:1rem;
margin-top:1rem;
`
const Button=styled.button`
padding:20px;
border-radius:10px;
border:none;
background:#AC7D88;
color:white;
cursor:pointer;
box-shadow:-4px 3px black;
&:hover{
  background:#643843;
  transform: translate(-4px, 3px);
};


`

function App() {
  const cats=useSelector(state=>state.cats)
  const favs=useSelector(state=>state.fav)
  const dispatch=useDispatch()
console.log(favs)

  useEffect(()=>{
    dispatch(fetchCatsFact())
  },[])
  function randomFact(){
    dispatch(fetchCatsFact())
  }

  function favoriHandler(){
    dispatch(addFav())
  }

  return (
    <Wrapper>
      <Links >
        <NavLink style={{color:'white',textDecoration:'none',padding:'10px',backgroundColor:'#AC7D88',borderRadius:'10px'}}
          to="/"
          exact
        >
          Rastgele
        </NavLink>
        <NavLink  style={{color:'white',textDecoration:'none',padding:'10px',backgroundColor:'#AC7D88',borderRadius:'10px'}}
          to="/listem"
        >
          Favoriler
        </NavLink>
      </Links>
      <Switch>
        <Route exact path='/'>
          <div>
            <p>{cats.fact}</p>
            <Buttons> 
              <Button onClick={randomFact}>Başka Bir Tane</Button>
              <Button onClick={favoriHandler}>Favorilere Ekle</Button>
            </Buttons>
          </div>
        </Route>
        <Route exact path='/listem'>
          {favs.map((fav,index)=>{
           return <div style={{marginTop:'10px'}} key={index}>{index} -- {fav}</div>
          })}
        </Route>

      </Switch>

    </Wrapper>



  )
}

export default App
