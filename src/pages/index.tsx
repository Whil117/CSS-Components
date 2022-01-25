import Button from '@Whil/components/Button'
import Div from '@Whil/components/Div'
import Formk from '@Whil/components/Form'
import Image from '@Whil/components/Image'
import P from '@Whil/components/P'
import Svg from '@Whil/components/Svg'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const fiveInputs = [
    {
      name: 'phone',
      as: 'input',
      id: 'phone',
      placeholder: 'Phone',
      style: {},
    },
    {
      name: 'email',
      as: 'input',
      id: 'email',
      placeholder: 'Email',
      style: {},
    },
    {
      name: 'nickname',
      as: 'textarea',
      id: 'nickname',
      placeholder: 'nickname',
      style: {
        height: '100px',
        resize: 'none',
      },
    },
  ]
  return (
    <div>
      <Button
        props={{
          type: 'default',
          style: {
            fontSize: '1rem',
          },
        }}
      >
        Buy now
      </Button>
      <Button props={{ type: 'submit' }} click={() => alert('puto')}>
        Buy now
      </Button>
      <Button props={{ type: 'add' }}>Buy now</Button>
      <Button props={{ type: 'warning' }}>Buy now</Button>
      <Button props={{ type: 'danger' }}>
        Buy now
        <Svg src="/icons/clip" />
      </Button>
      <Image
        src="/images/osuna.jpg"
        alt="test"
        width={400}
        height={520}
        styles={{ margin: '50px', borderRadius: '15px' }}
      />
      <Div styles={{ width: '550px', lineheight: '34px', margin: '10px' }}>
        <P styles={{ lineheight: '24px', width: '500px' }}>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero
          quis ducimus quisquam cum facere recusandae repellat reprehenderit
          provident doloremque. Mollitia at qui ex quaerat, beatae repellat
          quisquam numquam deleniti?{' '}
        </P>
        <Button props={{ type: 'submit' }}>Confirm</Button>
      </Div>
      <Formk
        arr={fiveInputs}
        submit={(values, resetForm) => {
          resetForm()
        }}
      />
    </div>
  )
}

export default Home
