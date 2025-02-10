import {Button} from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { login } from '@/api/auth'

export default function IndexPage() {
  const {t} = useTranslation()

  return (
    <>
      {t('app.title')}

      <Button>太极八荒了☯</Button>
      <Button onClick={async () => {
        console.log(await login());
      }}>登</Button>
      <code>uiiaiuuiiiai</code>
    </>
  )
}