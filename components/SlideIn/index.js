import dynamic from 'next/dynamic'

const SlideIn = dynamic(() => import('./SlideIn.js'), {
    ssr: false
})

export default SlideIn