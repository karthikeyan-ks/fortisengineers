import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './about.css'
import { useEffect, useRef, useState } from 'react';

export const About = () => {
    const [product, setProduct] = useState(0)
    const [clients, setClient] = useState(0)
    const targetRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver((enteries) => {
            console.log("called inside observer...");
            enteries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // this function activate when the scrolled to target section
                    setProduct((prev) => prev += 1)
                    setClient((prev) => prev += 1)
                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold: 1
        })
        console.log(observer, targetRef)
        if (targetRef.current) {
            observer.observe(targetRef.current)
        }
        console.log("called useEffect..");

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current)
            }
        }
    }, [])
    useEffect(() => {
        if (product < 30) {
            const timeout = setTimeout(() => {
                setProduct((prev) => prev + 1)
            }, 100)
            return () => clearTimeout(timeout)
        }
    }, [product])
    useEffect(() => {
        if (clients < 4) {
            const timeout = setTimeout(() => {
                setClient((prev) => prev += 1)
            }, 1000)
            return () => clearTimeout(timeout)
        }

    }, [clients])

    return (<div className='container'>
        <div className='row' ref={targetRef}>
            <div className='col'>
                <h1>About Fortis Engineers</h1>
                <p style={{ whiteSpace: "pre-line" }}>Fortis Engineers -The leading Natural Rubber processing ( TSR/ISNR) machinery manufacturer successfully continues it's journey in supplying quality and reliabile machines all over India making it one of the top in the industry.
                    <br />
                    <br />
                    Our commitment towards delivering best quality machinery and prompt service has taken the company to this position. Quality is our motto, teamwork is our strength. We understand the challenges faced by the industry and works towards delivering machines with innovative upgradations.
                    <br />
                    <br />
                    We assist you in all aspects of factory installation starting from project report assistance, setting out of layout, plant design, operations, installation, commissioning and trial run.
                    <br />
                    <br />
                    We welcome you to associate with us in building your dream crumb/TSR factory
                </p>
                <div className='row'>
                    <div className='col box' style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                        <h1>{product}+</h1>
                    </div>
                    <div className='col box' style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                        <h1>{clients}+</h1>
                    </div>
                </div>
            </div>
            <div className='col' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src="https://fortisengineers.in/wp-content/uploads/elementor/thumbs/PHOTO-2024-01-31-11-48-06-qjecmmk2tusdv8n7seq0hepqzitgzzidtgf7mib55c.jpg" alt="image"  />
            </div>
        </div>
    </div>)
}