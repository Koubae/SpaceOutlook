// Constants
const NASA_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "ipe47xfQI93OxNvTDno4mh8DpdiEedEvUPkafwaB"; // WARN: Keep Secret!

const axios = require('axios');
const axiosReqAsync = async (url) => await (await axios.get( url ));

const NasaAPI =  {
    // Config
    __NASA_URL__: `${NASA_URL}?api_key=${API_KEY}`,

    // ENDPOINTS
    getPOD: function(data=undefined) {
        return axiosReqAsync(this.__NASA_URL__);
    },

    getPODDate: function(dateString) {
        let url = `${this.__NASA_URL__}&date=${dateString.toString()}`;
        return axiosReqAsync(url);
    },

    getPODDateRange: function(dateStringFrom) {
        let url = `${this.__NASA_URL__}&start_date=${dateStringFrom}`;
        console.log("URL", url);
        return axiosReqAsync(url);
    },


    // ------------------- < Testing > ------------------- \\
    getPOSTest: function() {
        return {
            copyright: 'Col Druscie Obs.AAC',
            date: '2021-12-08',
            explanation: `Comet Hale-Bopp, the Great Comet of 1997, became much brighter than any surrounding stars. It was seen even over bright city lights. Away from city lights, however, it put on quite a spectacular show. Here Comet H
            ale-Bopp was photographed above Val Parola Pass in the Dolomite mountains surrounding Cortina d'Ampezzo, Italy. Comet Hale-Bopp's blue ion tail, consisting of ions from the comet's nucleus, is pushed out by the solar wind. The wh
            ite dust tail is composed of larger particles of dust from the nucleus driven by the pressure of sunlight, that orbit behind the comet. Comet Hale-Bopp (C/1995 O1) remained visible to the unaided eye for 18 months -- longer than
            any other comet in recorded history. The large comet is next expected to return around the year 4385.  This month, Comet Leonard is brightening and may soon become visible to the unaided eye.`,
            hdurl: 'https://apod.nasa.gov/apod/image/2112/halebopp_dimai_960.jpg',
            media_type: 'image',
            service_version: 'v1',
            title: 'Comet Hale-Bopp Over Val Parola Pass',
            url: 'https://apod.nasa.gov/apod/image/2112/halebopp_dimai_960.jpg'
        }
    },

    getPOSTestVideo: function() {
        return {
            "date": "2021-11-30",
            "explanation": "What's that moving across the sky? A planet just a bit too faint to see with the unaided eye: Uranus. The gas giant out past Saturn was tracked earlier this month near opposition -- when it was closest to Earth and at its brightest. The featured video captured by the Bayfordbury Observatory in Hertfordshire, UK is a four-hour time-lapse showing Uranus with its four largest moons in tow: Titania, Oberon, Umbriel and Ariel. Uranus' apparent motion past background stars is really dominated by Earth's own orbital motion around our Sun. \t The cross seen centered on Uranus is called a diffraction spike and is caused by light diffracting around the four arms that hold one of the telescope's mirrors in place.  The rotation of the diffraction spikes is not caused by the rotation of Uranus but, essentially, by the rotation of the Earth. During the next few months Uranus itself will be visible with binoculars, but, as always, to see its moons will require a telescope.",
            "media_type": "video",
            "service_version": "v1",
            "title": "In Motion: Uranus and Moons",
            "url": "https://www.youtube.com/embed/VYWjxvm14Pk?rel=0"
        }
    },

    getPODDateTest: function() {
        return {
            found: true,
            error: false,
            data: {
                copyright: 'Col Druscie Obs.AAC',
                date: '2021-12-08',
                explanation: `Comet Hale-Bopp, the Great Comet of 1997, became much brighter than any surrounding stars. It was seen even over bright city lights. Away from city lights, however, it put on quite a spectacular show. Here Comet H
                ale-Bopp was photographed above Val Parola Pass in the Dolomite mountains surrounding Cortina d'Ampezzo, Italy. Comet Hale-Bopp's blue ion tail, consisting of ions from the comet's nucleus, is pushed out by the solar wind. The wh
                ite dust tail is composed of larger particles of dust from the nucleus driven by the pressure of sunlight, that orbit behind the comet. Comet Hale-Bopp (C/1995 O1) remained visible to the unaided eye for 18 months -- longer than
                any other comet in recorded history. The large comet is next expected to return around the year 4385.  This month, Comet Leonard is brightening and may soon become visible to the unaided eye.`,
                hdurl: 'https://apod.nasa.gov/apod/image/2112/halebopp_dimai_960.jpg',
                media_type: 'image',
                service_version: 'v1',
                title: 'Comet Hale-Bopp Over Val Parola Pass',
                url: 'https://apod.nasa.gov/apod/image/2112/halebopp_dimai_960.jpg'
            }
        }
    },

    getPODDateRangeTest: function() {
        return [
                {
                    "date": "2021-12-01",
                    "explanation": "What causes a blue band to cross the Moon during a lunar eclipse? The blue band is real but usually quite hard to see. The featured HDR image of last week's lunar eclipse, however -- taken from Yancheng, China -- has been digitally processed to equalize the Moon's brightness and exaggerate  the colors.  The gray color of the bottom right is the Moon's natural color, directly illuminated by sunlight. The upper left part of the Moon is not directly lit by the Sun since it is being eclipsed -- it in the Earth's shadow. It is faintly lit, though, by sunlight that has passed deep through Earth's atmosphere. This part of the Moon is red -- and called a blood Moon -- for the same reason that Earth's sunsets are red: because air scatters away more blue light than red. The unusual blue band is different -- its color is created by sunlight that has passed high through Earth's atmosphere, where red light is better absorbed by ozone than blue. A total eclipse of the Sun will occur this weekend but, unfortunately, totality be visible only near the Earth's South Pole.   Almost Hyperspace: Random APOD Generator",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/BlueRedMoon_Yu_960.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "A Blue-Banded Blood Moon",
                    "url": "https://apod.nasa.gov/apod/image/2112/BlueRedMoon_Yu_960.jpg"
                },
                {
                    "copyright": "Dietmar Hager",
                    "date": "2021-12-02",
                    "explanation": "Grand spiral galaxies often seem to get all the glory, flaunting their young, bright, blue star clusters in beautiful, symmetric spiral arms. But small galaxies form stars too, like nearby NGC 6822, also known as Barnard's Galaxy. Beyond the rich starfields in the constellation Sagittarius, NGC 6822 is a mere 1.5 million light-years away, a member of our Local Group of galaxies. A dwarf irregular galaxy similar to the Small Magellanic Cloud, NGC 6822 is about 7,000 light-years across. Brighter foreground stars in our Milky Way have a spiky appearance. Behind them, Barnard's Galaxy is seen to be filled with young blue stars and mottled with the telltale pinkish hydrogen glow of star forming regions in this deep color composite image.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/NGC6822LRGB-1.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "NGC 6822: Barnard's Galaxy",
                    "url": "https://apod.nasa.gov/apod/image/2112/NGC6822LRGB-11024.jpg"
                },
                {
                    "copyright": "Gregg Ruppel",
                    "date": "2021-12-03",
                    "explanation": "Sweeping through northern predawn skies, on November 24 Comet Leonard (C/2021 A1) was caught between two galaxies in this composite telescopic image. Sporting a greenish coma the comet's dusty tail seems to harpoon the heart of NGC 4631 (top) also known as the Whale Galaxy. Of course NGC 4631 and NGC 4656 (bottom, aka the Hockey Stick) are background galaxies some 25 million light-years away. On that date the comet was about 6 light-minutes from our fair planet. Its closest approach to Earth (and even closer approach to Venus) still to come, Comet Leonard will grow brighter in December. Already a good object for binoculars and small telescopes, this comet will likely not return to the inner Solar System. Its perihelion, or closest approach to the Sun, will be on January 3, 2022.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/ngc4656_4631_A1-LRGB_112421.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Comet Leonard and the Whale Galaxy",
                    "url": "https://apod.nasa.gov/apod/image/2112/ngc4656_4631_A1-LRGB_112421_1024px.jpg"
                },
                {
                    "copyright": "Marcella Giulia Pace",
                    "date": "2021-12-04",
                    "explanation": "In this snapshot from November 18, the Full Moon was not far from Earth's shadow. In skies over Sicily the brightest lunar phase was eclipsed by passing clouds though. The full moonlight was dimmed and momentarily diffracted by small but similar sized water droplets near the edges of the high thin clouds. The resulting iridescence shines with colors like a lunar corona. On that night, the Full Moon was also seen close to the Pleiades star cluster appearing at the lower left of the iridescent cloud bank. The stars of the Seven Sisters were soon to share the sky with a darker, reddened lunar disk.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/IridescenzaLunaPleiadi.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Iridescent by Moonlight",
                    "url": "https://apod.nasa.gov/apod/image/2112/IridescenzaLunaPleiadi1024.jpg"
                },
                {
                    "copyright": "Petr HorálekESOPhoto AmbassadorInst. of Physics in Opava Acknowledgement: Xavier Jubier",
                    "date": "2021-12-05",
                    "explanation": "Yesterday there was a total solar eclipse visible only at the end of the Earth.  To capture the unusual phenomenon, airplanes took flight below the clouded seascape of Southern Ocean. The featured image shows one relatively spectacular capture where the bright spot is the outer corona of the Sun and the eclipsing Moon is seen as the dark spot in the center.  A wing and engine of the airplane are visible across the left and bottom of the image, while another airplane observing the eclipse is visible on the far left. The dark area of the sky surrounding the eclipsed Sun is called a shadow cone. It is dark because you are looking down a long corridor of air shadowed by the Moon. A careful inspection of the eclipsed Sun will reveal the planet Mercury just to the right. The next total solar eclipse shadow will cross parts of Australia and Indonesia in April of 2023, while the one after that will cross North America in April of 2024.   Notable Eclipse Submissions to APOD: Total Solar Eclipse of 2021 December",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/EclipseAntarctica_Horalek_1500.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Total Solar Eclipse Below the Bottom of the World",
                    "url": "https://apod.nasa.gov/apod/image/2112/EclipseAntarctica_Horalek_1080.jpg"
                },
                {
                    "copyright": "Andrew McCarthy",
                    "date": "2021-12-06",
                    "explanation": "What's that unusual spot on the Moon? It's the International Space Station. Using precise timing, the Earth-orbiting space platform was photographed in front of a partially lit gibbous Moon last month. The featured composite, taken from Payson, Arizona, USA last month, was intricately composed by combining, in part, many 1/2000-second images from a video of the ISS crossing the Moon. A close inspection of this unusually crisp ISS silhouette will reveal the outlines of numerous solar panels and trusses.  The bright crater Tycho is visible on the upper left, as well as comparatively rough, light colored terrain known as highlands, and relatively smooth, dark colored areas known as maria.  On-line tools can tell you when the International Space Station will be visible from your area.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/IssMoon_McCarthy_1663.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Space Station Silhouette on the Moon",
                    "url": "https://apod.nasa.gov/apod/image/2112/IssMoon_McCarthy_960.jpg"
                },
                {
                    "date": "2021-12-07",
                    "explanation": "very time two massive black holes collide, a loud chirping sound is broadcast out into the universe in gravitational waves. Humanity has only had the technology to hear these unusual chirps for the past seven years, but since then we have heard about 90 -- during the first three observing runs. Featured above are the spectrograms -- plots of gravitational-wave frequency versus time -- of these 90 as detected by the giant detectors of LIGO (in the USA), VIRGO (in Europe), and KAGRA (in Japan). The more energy received on Earth from a collision, the brighter it appears on the graphic. Among many science firsts, these gravitational-radiation chirps are giving humanity an unprecedented inventory of black holes and neutron stars, and a new way to measure the expansion rate of our universe. A fourth gravitational wave observing run with increased sensitivity is currently planned to begin in 2022 December.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/GWaveCatalog_LigoVirgo_5692.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Ninety Gravitational Wave Spectrograms and Counting",
                    "url": "https://apod.nasa.gov/apod/image/2112/GWaveCatalog_LigoVirgo_1080.jpg"
                },
                {
                    "copyright": "Col Druscie Obs.AAC",
                    "date": "2021-12-08",
                    "explanation": "Comet Hale-Bopp, the Great Comet of 1997, became much brighter than any surrounding stars. It was seen even over bright city lights. Away from city lights, however, it put on quite a spectacular show. Here Comet Hale-Bopp was photographed above Val Parola Pass in the Dolomite mountains surrounding Cortina d'Ampezzo, Italy. Comet Hale-Bopp's blue ion tail, consisting of ions from the comet's nucleus, is pushed out by the solar wind. The white dust tail is composed of larger particles of dust from the nucleus driven by the pressure of sunlight, that orbit behind the comet. Comet Hale-Bopp (C/1995 O1) remained visible to the unaided eye for 18 months -- longer than any other comet in recorded history. The large comet is next expected to return around the year 4385.  This month, Comet Leonard is brightening and may soon become visible to the unaided eye.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/halebopp_dimai_960.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Comet Hale-Bopp Over Val Parola Pass",
                    "url": "https://apod.nasa.gov/apod/image/2112/halebopp_dimai_960.jpg"
                },
                {
                    "copyright": "JM Pasachoff Antarctic Expedition",
                    "date": "2021-12-09",
                    "explanation": "Few were able to stand in the Moon's shadow and watch the December 4 total eclipse of the Sun. Determined by celestial mechanics and not geographical boundaries, the narrow path of totality tracked across planet Earth's relatively inaccessible southernmost continent. Still, some enthusiastic and well-insulated eclipse chasers were rewarded with the dazzling spectacle in Antarctica's cold but clear skies. Taken just before the brief totality began, this image from a ground-based telescope inside the edge of the shadow path at Union Glacier catches a glimmer of sunlight near the top of the silhouetted lunar disk. Look closely for the pinkish solar prominences arcing above the Sun's limb. During totality, the magnificent solar corona, the Sun's outer atmosphere, made its much anticipated appearance, seen in the composite view streaming far from the Sun's edge.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/SOLARECLIPSE2021FORDISTROHighRes.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "A Total Eclipse of the Sun",
                    "url": "https://apod.nasa.gov/apod/image/2112/SOLARECLIPSE2021FORDISTROHighRes1024.jpg"
                },
                {
                    "copyright": "Stephanie Ziyi Ye",
                    "date": "2021-12-10",
                    "explanation": "During polar day, in Arctic and Antarctic summer, the Sun stays above the horizon for periods of 24 hours or more. Recorded on December 4, this fisheye timelapse image tracks the Sun in multiple frames as it completes a circle in the summer sky above Union Glacier, Antarctica. Of course on that date, Union Glacier's sky did grow dark even though the Sun was above the horizon. Captured during the brief period of totality, an eclipsed Sun is at bottom center of the composite view. Near the edge of the total eclipse path across planet Earth, the Moon's shadow darkens the sky above.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/Eclipseclock-final2.JPG",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Eclipse on a Polar Day",
                    "url": "https://apod.nasa.gov/apod/image/2112/Eclipseclock-final2_1024c.JPG"
                },
                {
                    "copyright": "Aman Chokshi",
                    "date": "2021-12-11",
                    "explanation": "From this vantage point about three quarters of a mile from planet Earth's geographic South Pole, the December 4 eclipse of the Sun was seen as a partial eclipse. At maximum the New Moon blocked 90 percent of the solar disk. Of course, crews at the South Pole Telescope (left) and BICEP telescope (right) climbed to the roof of Amundsen-Scott station's Dark Sector Laboratory to watch. Centered near the local eclipse maximum, the composite timelapse view features an image of the Sun traversing cold antarctic skies taken every four minutes. Left to right along the roof line it also features the raised arms of Brandon Amat, Aman Chokshi, Cheng Zhang, James Bevington and Allen Foster.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/eclipse_apod.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Postcard from the South Pole",
                    "url": "https://apod.nasa.gov/apod/image/2112/eclipse_apod1024.jpg"
                },
                {
                    "copyright": "Dan Bartlett",
                    "date": "2021-12-12",
                    "explanation": "Comet Leonard is now visible to the unaided eye -- but just barely.  Passing nearest to the Earth today, the comet is best seen this week soon after sunset, toward the west, low on the horizon.  Currently best visible in the north, by late December the comet will best be seen from south of Earth's equator. The featured image of Comet C/2021 A1 (Leonard) was taken a week ago from California, USA. The deep exposure shows in great detail the comet's green gas coma and developing dust tail. The comet -- across our inner Solar System and only light-minutes away -- was captured passing nearly in front of globular star cluster M3. In contrast, M3 is about 35,000 light-years away.  In a week, Comet Leonard will pass unusually close to Venus, but will continue on and be at its closest to the Sun in early January.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/M3Leonard_Bartlett_3843.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Comet Leonard Before Star Cluster M3",
                    "url": "https://apod.nasa.gov/apod/image/2112/M3Leonard_Bartlett_960.jpg"
                },
                {
                    "copyright": "James Boardman-Woodend Annotation: Judy Schmidt",
                    "date": "2021-12-13",
                    "explanation": "What's going on behind that mountain? Quite a bit.  First of all, the mountain itself, named Kirkjufell, is quite old and located in western Iceland near the town of  Grundarfjörður.  In front of the steeply-sloped structure lies a fjord that had just begun to freeze when the above image was taken -- in mid-December of 2012. Although quite faint to the unaided eye, the beautiful colors of background aurorae became quite apparent on the 25-second exposure. What makes this image of particular note, though, is that it also captures streaks from the Geminids meteor shower -- meteors that might not have been evident were the aurora much brighter. Far in the distance, on the left, is the band of our Milky Way Galaxy, while stars from our local part of the Milky Way appear spread across the background.  Tonight the Geminids meteor shower peaks again and may well provide sky enthusiasts with their own memorable visual experiences.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/auroraemeteors_boardman_4591.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Meteors and Auroras over Iceland",
                    "url": "https://apod.nasa.gov/apod/image/2112/auroraemeteors_boardman_1080.jpg"
                },
                {
                    "date": "2021-12-14",
                    "explanation": "To some, it may look like a beehive. In reality, the featured image from the Hubble Space Telescope captures a cosmic pillar of dust, over two-light years long, inside of which is Herbig-Haro 666 -- a young star emitting powerful jets. The structure lies within one of our galaxy's largest star forming regions, the Carina Nebula, shining in southern skies at a distance of about 7,500 light-years.  The pillar's layered outline are shaped by the winds and radiation of Carina's young, hot, massive stars, some of which are still forming inside the nebula.  A dust-penetrating view in infrared light better shows the two, narrow, energetic jets blasting outward from a still hidden infant star.   Open Science: Browse 2,600+ codes in the Astrophysics Source Code Library",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/HH666_HubbleOzsarac_4347.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "HH 666: Carina Dust Pillar with Jet",
                    "url": "https://apod.nasa.gov/apod/image/2112/HH666_HubbleOzsarac_960.jpg"
                },
                {
                    "copyright": "Zhuoxiao WangOrigin.Space",
                    "date": "2021-12-15",
                    "explanation": "What does Comet Leonard look like from space?  Today's featured image from Origin.Space's Yangwang-1 space telescope shows not only the currently bright comet -- but several other space delights as well. Taken in optical and ultraviolet light, C/2021 A1 (Leonard) is visible with an extended tail near the image center as it appeared five days ago.  The Earth is visible on the lower right, while layers of the Earth's atmosphere glow diagonally from the lower left to the upper right. The trails of two satellites can be seen in front of a myriad of distant stars that dot the background on the upper left. The faint bands of light running diagonally from the lower right to the upper left are auroras. Finally, the image also caught a meteor streaking just below the airglow. To see Comet Leonard yourself from the Earth's surface during the next few days, look toward the western horizon just after sunset or just before sunrise.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/LeonardSpace_Yangwang1_1960.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Comet Leonard from Space",
                    "url": "https://apod.nasa.gov/apod/image/2112/LeonardSpace_Yangwang1_960_annotated.jpg"
                },
                {
                    "copyright": "Fefo Bouvier",
                    "date": "2021-12-16",
                    "explanation": "Fireflies flash along a moonlit countryside in this scene taken on the night of December 13/14 from southern Uruguay, planet Earth. On that night meteors fell in the partly cloudy skies above during the annual Geminid meteor shower. Frames recorded over a period of 1.5 hours are aligned in the composite image made with the camera facing south. That direction was opposite the shower's radiant toward the north and so the Geminid meteor streaks appear to converge at an antiradiant below the southern horizon. The shower's apparent radiant (and antiradiant) is just due to perspective though. As Earth sweeps through the dust trail of mysterious asteroid 3200 Phaethon, the dust grains that create the Geminid shower meteors are really moving along parallel tracks. They enter Earth's atmosphere traveling at about 22 kilometers per second.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/geminids_2021_fefo_bouvier.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Geminids of the South",
                    "url": "https://apod.nasa.gov/apod/image/2112/geminids_2021_fefo_bouvier1024.jpg"
                },
                {
                    "copyright": "Alvin Wu",
                    "date": "2021-12-17",
                    "explanation": "An arid expanse of the Tengger Desert in north-central China, planet Earth fills the foreground of this starry scene. A widefield panoramic view, it was recorded shortly after moonset in the local predawn hours of December 14. Pictured in the still dark sky, stars of the northern winter hexagon surround a luminous Milky Way. Seen near the peak of the annual meteor shower, the startling flash of a bright Geminid fireball meteor was also captured on that night. Above the western horizon and just below bright star Capella, its dagger-like trail points back to the meteor shower's radiant in Gemini. Of course, the constellation Gemini is easy to spot. Its twin bright stars, bluish Castor and yellowish Pollux are near top center in the frame.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/GeminidFireball_AlvinWu.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Geminid of the North",
                    "url": "https://apod.nasa.gov/apod/image/2112/GeminidFireball_AlvinWu1024c.jpg"
                },
                {
                    "date": "2021-12-18",
                    "explanation": "The first identified compact galaxy group, Stephan's Quintet is featured in this eye-catching image constructed with data drawn from the extensive Hubble Legacy Archive. About 300 million light-years away, only four of these five galaxies are actually locked in a cosmic dance of repeated close encounters. The odd man out is easy to spot, though. The interacting galaxies, NGC 7319, 7318A, 7318B, and 7317 have an overall yellowish cast. They also tend to have distorted loops and tails, grown under the influence of disruptive gravitational tides. But the predominantly bluish galaxy, NGC 7320, is closer, just 40 million light-years distant, and isn't part of the interacting group. Stephan's Quintet lies within the boundaries of the high flying constellation Pegasus. At the estimated distance of the quartet of interacting galaxies, this field of view spans about 500,000 light-years. But moving just beyond this field, up and to the right, astronomers can identify another galaxy, NGC 7320C, that is also 300 million light-years distant. Including it would bring the interacting quartet back up to quintet status.",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/HUBBLE_NGC7318_PS2_CROP_INSIGHT3072.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Stephan's Quintet",
                    "url": "https://apod.nasa.gov/apod/image/2112/HUBBLE_NGC7318_PS2_CROP_INSIGHT1024.jpg"
                },
                {
                    "copyright": "Antonio Finazzi",
                    "date": "2021-12-19",
                    "explanation": "It is not a coincidence that planets line up. That's because all of the planets orbit the Sun in (nearly) a single sheet called the plane of the ecliptic. When viewed from inside that plane -- as Earth dwellers are likely to do -- the planets all appear confined to a single band. It is a coincidence, though, when three of the brightest planets all appear in nearly the same direction.  Such a coincidence was captured earlier this month.  Featured above (right to left), Venus, Saturn, and Jupiter were all imaged together in a line just after sunset, from the San Fermo Hills, Bergamo, Italy. Joining the alignment are Earth's Moon, and the position of the more distant Uranus. Bands of clouds streak across the sky toward the setting Sun.  As Comet Leonard fades, this planetary alignment -- absent the Moon -- should persist for the rest of the month.   Discovery + Outreach: Graduate student research position open for APOD",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/PlanetsAligned_Finazzi_3757.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Planetary Alignment over Italy",
                    "url": "https://apod.nasa.gov/apod/image/2112/PlanetsAligned_Finazzi_1080.jpg"
                },
                {
                    "copyright": "Cory Poole",
                    "date": "2021-12-20",
                    "explanation": "This picture was supposed to feature a comet. Specifically, a series of images of the brightest comet of 2021 were being captured: Comet Leonard.  But the universe had other plans. Within a fraction of a second, a meteor so bright it could be called a fireball streaked through just below the comet. And the meteor's flash was even more green than the comet's coma.  The cause of the meteor's green was likely magnesium evaporating from the meteor's pebble-sized core, while the cause of the comet's green was likely diatomic carbon recently ejected from the comet's city-sized nucleus. The images were taken 10 days ago over the Sacramento River and Mt. Lassen in California, USA. The fireball was on the leading edge of this year's Geminid Meteor Shower -- which peaked a few days later. Comet Leonard is now fading after reaching naked-eye visibility last week -- but now is moving into southern skies.   Almost Hyperspace: Random APOD Generator",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/LeonardMeteor_Poole_2250.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "The Comet and the Fireball",
                    "url": "https://apod.nasa.gov/apod/image/2112/LeonardMeteor_Poole_960.jpg"
                },
                {
                    "copyright": "Stefan Seip",
                    "date": "2021-12-21",
                    "explanation": "Welcome to December's solstice, first day of winter in the north and summer for the southern hemisphere. Astronomical markers of the seasons, solstice and equinox dates are based on the Sun's place in its annual journey along the ecliptic, through planet Earth's sky. At this solstice, the Sun reaches its maximum southern declination of -23.5 degrees today at 15:59 UTC, while its right ascension coordinate on the celestial sphere is 18 hours. That puts the Sun in the constellation Sagittarius in a direction near the center of our Milky Way galaxy. In fact, if you could see today's Solstice Sun against faint background stars and nebulae (that's really hard to do, especially in the daytime ...) your view might look something like this composited panorama. To make it, images of our fair galaxy were taken under dark Namibian night skies, then stitched together in a panoramic view. From a snapshot made on 2015 December 21, the Sun was digitally overlayed as a brilliant star at today's northern winter solstice position, close to the center of the Milky Way.   Discovery + Outreach: Graduate student research position open for APOD",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/WinterSolsticeMW_Seip_2980.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Solstice Sun and Milky Way",
                    "url": "https://apod.nasa.gov/apod/image/2112/WinterSolsticeMW_Seip_1079.jpg"
                },
                {
                    "copyright": "Jordan Sirokie",
                    "date": "2021-12-22",
                    "explanation": "Birds don't fly this high.  Airplanes don't go this fast.  The Statue of Liberty weighs less.  No species other than human can even comprehend what is going on, nor could any human just a millennium ago. The launch of a rocket bound for space is an event that inspires awe and challenges description.  Pictured here, a SpaceX Falcon 9 rocket lifted off from Kennedy Space Center, Florida earlier this month carrying the Imaging X-ray Polarimetry Explorer (IXPE).  IXPE is scheduled to observe high-energy objects such as neutron stars, black holes, and the centers of distant galaxies to better determine the physics and geometries that create and control them.  From a standing start, the 300,000+ kilogram rocket ship lifted IXPE up to circle the Earth, where the outside air is too thin to breathe. Rockets bound for space are now launched from somewhere on Earth every few days.    Launch Update: James Webb Space Telescope",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/IxpeLaunch_Sirokie_1875.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Launch of the IXPE Observatory",
                    "url": "https://apod.nasa.gov/apod/image/2112/IxpeLaunch_Sirokie_960.jpg"
                },
                {
                    "copyright": "Tunc Tezel",
                    "date": "2021-12-23",
                    "explanation": "Are you still looking for that perfect holiday gift for an astronomer? If your night sky is dark and horizon clear enough, the Solar System may have done your shopping for you. Send them outside after sunset to see three planets and a comet. In this snapshot of the December solstice evening sky from the village of Kirazli, Turkey the brightest celestial beacon is Venus, close to the southwestern horizon at the right. Look left and up to find Saturn shining between clouds. Follow that line farther left and up to bright Jupiter, the Solar System's ruling gas giant. This year's surprise visitor to the inner Solar System, Comet Leonard (C/2021 A1), is near the horizon too. The comet is fainter but forms a nearly equilateral triangle with planets Venus and Saturn in this view. After a dramatic brightening in recent days the comet is just visible to the unaided eye, though a nice pair of binoculars is always a good idea.   Notable Submissions to APOD: Planetary Alignment: 2021 December",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/20211221Tezel.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Three Planets and a Comet",
                    "url": "https://apod.nasa.gov/apod/image/2112/20211221Tezel1024c.jpg"
                },
                {
                    "copyright": "Michael Sherick",
                    "date": "2021-12-24",
                    "explanation": "The Crab Nebula is cataloged as M1, the first object on Charles Messier's famous 18th century list of things which are not comets. In fact, the Crab is now known to be a supernova remnant, debris from the death explosion of a massive star, witnessed by astronomers in the year 1054. This sharp, ground-based telescopic view combines broadband color data with narrowband data that tracks emission from ionized sulfur, hydrogen, and oxygen atoms to explore the tangled filaments within the still expanding cloud. One of the most exotic objects known to modern astronomers, the Crab Pulsar, a neutron star spinning 30 times a second, is visible as a bright spot near the nebula's center. Like a cosmic dynamo, this collapsed remnant of the stellar core powers the Crab's emission across the electromagnetic spectrum. Spanning about 12 light-years, the Crab Nebula is a mere 6,500 light-years away in the constellation Taurus.   Launch Update: James Webb Space Telescope",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/Sherick_M1_SHOLRGB_12-5-21a.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "M1: The Crab Nebula",
                    "url": "https://apod.nasa.gov/apod/image/2112/Sherick_M1_SHOLRGB_12-5-21a_1024.jpg"
                },
                {
                    "copyright": "CARA Project",
                    "date": "2021-12-25",
                    "explanation": "The tail of a comet streams across this three degree wide telescopic field of view captured under dark Namibian skies on December 21. In outburst only a few days ago and just reaching naked eye visibility Comet Leonard (C/2021 A1) is this year's brightest comet. Binoculars will make the diffuse comet easier to spot though, close to the western horizon after sunset. Details revealed in the sharp image show the comet's coma with a greenish tinge, and follow the interaction of the comet's ion tail with magnetic fields in the solar wind. After passing closest to Earth on December 12 and Venus on December 18, Comet Leonard is heading toward perihelion, its closest approach to the Sun on January 3rd. Appearing in late December's beautiful evening skies Comet Leonard has also become known as 2021's Christmas Comet.   Launch Update: James Webb Space Telescope",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/C2021A1_211221.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "The Tail of a Christmas Comet",
                    "url": "https://apod.nasa.gov/apod/image/2112/C2021A1_211221_1024.jpg"
                },
                {
                    "date": "2021-12-26",
                    "explanation": "There's a big new telescope in space. This one, the James Webb Space Telescope (JWST), not only has a mirror over five times larger than Hubble's in area, but can see better in infrared light. The featured picture shows JWST high above the Earth just after being released by the upper stage of an Ariane V rocket, launched yesterday from French Guiana. Over the next month, JWST will move out near the Sun-Earth L2 point where it will co-orbit the Sun with the Earth. During this time and for the next five months, JWST will unravel its segmented mirror and an array of sophisticated scientific instruments -- and test them. If all goes well, JWST will start examining galaxies across the universe and planets orbiting stars across our Milky Way Galaxy in the summer of 2022.   APOD Gallery: Webb Space Telescope Launch",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/JwstLaunch_Arianespace_1920.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "James Webb Space Telescope over Earth",
                    "url": "https://apod.nasa.gov/apod/image/2112/JwstLaunch_Arianespace_1080.jpg"
                },
                {
                    "copyright": "Matipon TangmatithamNARIT",
                    "date": "2021-12-27",
                    "explanation": "Which one of these two streaks is a comet? Although they both have comet-like features, the lower streak is the only real comet. This lower streak shows the coma and tail of Comet Leonard, a city-sized block of rocky ice that is passing through the inner Solar System as it continues its looping orbit around the Sun.  Comet Leonard has recently passed its closest to both the Earth and Venus and will round the Sun next week.  The comet, still visible to the unaided eye, has developed a long and changing tail in recent weeks.  In contrast, the upper streak is the launch plume of the Ariane V rocket that lifted the James Webb Space Telescope (JWST) off the Earth two days ago. The featured single-exposure image was taken from Thailand, and the foreground spire is atop a pagoda in Doi Inthanon National Park. JWST, NASA's largest and most powerful space telescope so far, will orbit the Sun near the Earth-Sun L2 point and is scheduled to start science observations in the summer of 2022.    Gallery: Comet Leonard 2021  Gallery: Webb Space Telescope Launch: 2021 December 25",
                    "hdurl": "https://apod.nasa.gov/apod/image/2112/CometJwst_Matipon_2048.jpg",
                    "media_type": "image",
                    "service_version": "v1",
                    "title": "Comet Leonard behind JWST Launch Plume",
                    "url": "https://apod.nasa.gov/apod/image/2112/CometJwst_Matipon_1080.jpg"
                }
            ]
    }


}

module.exports = NasaAPI;
