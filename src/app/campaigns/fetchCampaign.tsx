import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import Image from 'next/image';
import { StaticImport } from "next/dist/shared/lib/get-img-props";
async function  getCampaign(){
    const resp = await fetch('http://localhost:8000/campaign', {
        next:{
            revalidate:0
        }
    });

    return resp.json()
}

export default async function CampaignList(){
    const campaigns = await getCampaign()
    console.log(campaigns);
    return (
        <>
            {campaigns.map((campaign:any)=>(
                
                <div className="col-md-3" key={campaign.id}>
                    <div className="inner">
                        <img className="img-fluid" src={campaign.campaign_photo} alt={campaign.campaign_photo} width={100} height={100} />
                        <h5>{campaign.campaign_title.slice(0, 30)} ...</h5>
                        <p>{campaign.campaign_description.slice(0, 30)} . . .</p>
                        <a href="">Read more</a>
                    </div>
                </div>
            ))}
        </>
    )
}