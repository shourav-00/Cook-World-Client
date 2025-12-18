import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Import images
import img1 from '../../../assets/banner/banner1.avif';
import img2 from '../../../assets/banner/banner2.avif';
import img3 from '../../../assets/banner/banner3.jpeg';
import img4 from '../../../assets/banner/img4.jpg';

const Banner = () => {
    return (
        <div className="w-full h-[200px] md:h-[300px] lg:h-[500px] relative">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={'fade'}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper w-full h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
                        style={{ backgroundImage: `url(${img1})` }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 z-10"></div>

                        {/* Content */}
                        <div className="relative z-20 text-center text-white px-4">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                                Taste the <span className="text-yellow-400">Love</span> in Every Bite
                            </h2>
                            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                                Our local chefs pour their hearts into every dish, creating memories that taste like home. 
                                Feel the warmth of home-cooked meals delivered with passion.
                            </p>
                            <button className="btn btn-lg text-white border-none bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full text-lg shadow-lg transform transition hover:scale-105 hover:shadow-yellow-500/50">
                                Order Now & Taste Happiness
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
                        style={{ backgroundImage: `url(${img2})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/60 to-black/70 z-10"></div>
                        <div className="relative z-20 text-center text-white px-4">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                                Stories Served <span className="text-yellow-400">Fresh</span>
                            </h2>
                            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                                Every recipe has a story, every chef has a dream. Taste the journey of local culinary artists 
                                who cook with more than ingredients – they cook with their souls.
                            </p>
                            <button className="btn btn-lg text-white border-none bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full text-lg shadow-lg transform transition hover:scale-105 hover:shadow-yellow-500/50">
                                Discover Their Stories
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
                        style={{ backgroundImage: `url(${img3})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 z-10"></div>
                        <div className="relative z-20 text-center text-white px-4">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                                Cooked with <span className="text-yellow-400">Heart</span>, Not Just Hands
                            </h2>
                            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                                When love becomes the secret ingredient, every meal becomes special. 
                                Experience the emotional connection that transforms simple ingredients into unforgettable moments.
                            </p>
                            <button className="btn btn-lg text-white border-none bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full text-lg shadow-lg transform transition hover:scale-105 hover:shadow-yellow-500/50">
                                Feel the Love & Order
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
                        style={{ backgroundImage: `url(${img4})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/60 to-black/70 z-10"></div>
                        <div className="relative z-20 text-center text-white px-4">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                                Memories Made <span className="text-yellow-400">Delicious</span>
                            </h2>
                            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                                From family traditions to new adventures in taste, every dish carries emotions. 
                                Let our chefs create beautiful food memories for you and your loved ones.
                            </p>
                            <button className="btn btn-lg text-white border-none bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full text-lg shadow-lg transform transition hover:scale-105 hover:shadow-yellow-500/50">
                                Create Food Memories
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;