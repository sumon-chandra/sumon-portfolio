import { certificates } from "../../primitives/certificates"
import SectionHead from "../SectionHead"

function CertificateSection() {
    return (
        <div className="section">
            <SectionHead parallaxValue="certificates" value="My Certificates" />
            <div className="grid-cols-2 gap-20 lg:grid lg:mt-20">
                {certificates.map(certificate => (
                    <a href={certificate.pdf} target="_blank" className="p-6 group bg-[#1a2436e6] text-desc-color rounded-md" key={certificate.id}>
                        <figure className="overflow-hidden rounded-md">
                            <img src={certificate.image} alt="Certificate Image" className="object-cover duration-1000 ease-in-out group-hover:scale-125" />
                        </figure>
                        <h3 className="mt-3 text-xl font-semibold">{certificate.title}</h3>
                        <p className="text-sm font-bold uppercase">Platform - {certificate.platform}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default CertificateSection
