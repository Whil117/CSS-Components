import Button from '@Whil/components/Button'
import Div from '@Whil/components/Div'
import Image from '@Whil/components/Image'
import Svg from '@Whil/components/Svg'
import type { NextPage } from 'next'

const Home: NextPage = () => {
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
      <Button props={{ type: 'submit' }}>Buy now</Button>
      <Button props={{ type: 'add' }}>Buy now</Button>
      <Button props={{ type: 'warning' }}>Buy now</Button>
      <Button props={{ type: 'danger' }}>
        Buy now
        <Svg src="/icons/clip" />
      </Button>
      <Image src="/images/osuna.jpg" alt="test" width={400} height={520} />
      <Div styles={{ width: '550px', lineheight: '34px', margin: '10px' }}>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero
          quis ducimus quisquam cum facere recusandae repellat reprehenderit
          provident doloremque. Mollitia at qui ex quaerat, beatae repellat
          quisquam numquam deleniti?{' '}
        </p>
        <Button props={{ type: 'submit' }}>Buy now</Button>
      </Div>
    </div>
  )
}

export default Home
