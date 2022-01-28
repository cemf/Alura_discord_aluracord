import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import appConfig from '../config.json'
import React from 'react'
import {useRouter} from 'next/router'

async function getUser(username) {
  return fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(response => {
      return response;
  })
}

function Titulo(props) {
  // let data = await getUser('cemf')
  // console.log(data)
  const children = props.children
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['500']};
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}

export default function PaginaInicial() {
  // const username = 'cemf'
  const [username, setUsername] = React.useState('cemf')
  const roteamento = useRouter();

  return (
    <>
    {/* ABAIXO */}
      {/* <Button
       styleSheet={{
        width: '100px',
        height:'10px'
      }}
      onClick={async(ev)=>{
        ev.preventDefault()
        return await fetch(`https://api.github.com/users/cemf`)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          ev.target.innerHTML = response.login;
        // return response.login
      })
      }}></Button> */}
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            'url(https://virtualbackgrounds.site/wp-content/uploads/2021/02/distracted-girlfriend-meme-1536x864.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%',
            maxWidth: '700px',
            borderRadius: '5px',
            padding: '32px',
            margin: '12% 20% 0 0',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(ev)=>{
              ev.preventDefault();
              roteamento.push('/chat')
              
            }}
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' },
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: '32px',
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>
            <TextField
               value={username}
               onChange={function Handler(ev){
                 let nome = ev.target.value;
                  setUsername(nome)                  
                  }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
              
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '10px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '10px',
                marginTop:  '6px',
                
               
              }}
              src={`https://github.com/${username.length >=2 ? username : ''}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '5px 10px',
                borderRadius: '1000px',
              }}
            >
              {username.length >=2 ? username: ''}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  )
}

// function HomePage() {
//     return (
//     <div>
//         <GlobalStyle/>
//         <Title tag="h2">teste</Title>
//         <h2>
//             Discord - Alura Maker
//         </h2>

//     </div>
//     )
//   }

//   export default HomePage
