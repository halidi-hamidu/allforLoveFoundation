import CampaignList from "./fetchCampaign";

export default function  Campagin (){
    return (
        <>
        <div className="campaign_section_hero_setion">
            <h1>foundation Campaigns</h1>
        </div>
        <div className="campaign_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading">
                            <h3>Latest Campaign</h3>
                            <div className="search_campaign">
                                <input type="text" placeholder="Search campaign . . ." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <CampaignList />
                </div>
            </div>
        </div>
        </>
    )
}