function Resume() {
    return (
        <div className='text-center'>
            <p className='m-2'>You can also view my Resume on <a href='https://docs.google.com/document/d/1WIhRvkGBx_Na3KBbDt7rj2FpzR6Nu42luJl0uBDsOYw/edit?usp=sharing'>Google Drive</a>.</p>
            <iframe title="Leithen's resume" src="https://docs.google.com/document/d/e/2PACX-1vTs4DxtY33grzdmA_Y2Tga3J1Q7iNoGj0I7qe9a-7wuDpByFSHLsGkxgQsiX14bhHUauVHPIfkesR4Y/pub?embedded=true" className='resumePDF'></iframe>
        </div>
    )
}

export default Resume;