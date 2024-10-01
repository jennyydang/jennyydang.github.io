import React from "react";

const Hero = ({
    type,
    headline,
    subheadline,
    color,
    image,
    subheadlinelist,
    primarybtn,
    primarylink,
    secondarybtn,
    secondarylink,
    download,
    scrollnextsection,
    scrollreference,
}) => {
    let cType = type ? type : "general";
    let cHeadline = headline ? headline : "Lorem";
    let cSubheadline = subheadline ? subheadline : null;
    let cSubheadlinelist = subheadlinelist ? subheadlinelist : null;
    let cColor = color ? color : null;
    let cImage = image ? image : null;
    let cPrimaryBtn = primarybtn ? primarybtn : null;
    let cPrimaryLink = primarylink ? primarylink : null;
    let cSecondaryBtn = secondarybtn ? secondarybtn : null;
    let cSecondaryLink = secondarylink ? secondarylink : null;
    let cSecondaryLinkDownload = download ? download : null;

    return (
        <section
            className="s-hero flex h-screen w-full justify-center items-center"
            style={{
                background: `${
                    cColor ? cColor : cImage ? "url('" + cImage + "')" : null
                }`,
            }}
        >
            <div className="s-hero__content">
                <h1 className="s-hero__content__headline text-center text-3xl md:text-8xl mb-4">
                    {cHeadline}
                </h1>
                {cSubheadline || cSubheadlinelist ? (
                    <h2 className="s-hero__content__subheadline flex-wrap text-xl">
                        {cSubheadline ? <>{cSubheadline}</> : ""}
                        {cSubheadlinelist
                            ? cSubheadlinelist.map((item, idx) => (
                                  <span className="e-tag" key={idx}>
                                      {item}
                                  </span>
                              ))
                            : ""}
                    </h2>
                ) : (
                    ""
                )}
                {cPrimaryBtn || cSecondaryBtn ? (
                    <div className="s-hero__content__cta mt-4 flex gap-4">
                        <a
                            href={cPrimaryLink}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            {cPrimaryBtn}
                        </a>
                        {cSecondaryBtn ? (
                            <a
                                href={cSecondaryLink}
                                className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"
                                download={cSecondaryLinkDownload}
                            >
                                {cSecondaryBtn}
                            </a>
                        ) : (
                            ""
                        )}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </section>
    );
};

export default Hero;
