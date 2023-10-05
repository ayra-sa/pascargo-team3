import React from 'react'
import TitleContainer from '@/components/order'
import { InputSection, InputField, DropContainer, DropItem, TextArea, InputContainer } from '@/components/order-form';
import Button from '@/components/button';
import ImageItem from '@/components/image-item';

const profileFields = [
    {
        head: "Email Addres",
        type: "email",
        title: "example@mail.com"
    },
    {
        head: "Phone",
        type: "number",
        title: "e.g xxxxxxx"
    },
];

const destination = [
    {
        head: 'From'
    },
    {
        head: 'To'
    }
]

const dimension = [
    {
        title: 'Length'
    },
    {
        title: 'Width'
    },
    {
        title: 'Height'
    }
]

const categoryProduct = [
    { category: 'Food Ingredients' },
    { category: 'Documents' },
    { category: 'Medicine' },
    { category: 'Electronic' },
    { category: 'Special Items' },
]

const transports = [
    {
        category: 'Pengiriman Darat',
        options: [
            { item: 'Truck' },
            { item: 'Fuso' },
            { item: 'Kereta Api' },
        ]
    },
    {
        category: 'Pengiriman Laut', options: [
            { item: 'Kapal Laut' },
        ]
    },
    {
        category: 'Pengiriman Udara', options: [
            { item: 'Pesawat Terbang' },
            { item: 'Pesawat Jet' },
        ]
    },
    {
        category: 'Pengiriman Internasional', options: [
            { item: 'Pesawat Terbang' },
            { item: 'Kereta Api' },
            { item: 'Kapal Api' },
            { item: 'Truck' },
        ]
    },
    {
        category: 'Pengiriman Khusus', options: [
            { item: 'Pesawat Kargo' },
            { item: 'Kapal Tanker' },
            { item: 'Roket' },
        ]
    }]

const list = [
    { content: 'Reliable door-to door parcel' },
    { content: 'Track & trace' },
    { content: 'Electronic Proof of Delivery in Real Time' },
]

const banks = [
    { image: '/order/visa.svg' },
    { image: '/order/mastercard.svg' },
    { image: '/order/paypal.svg' },
]

export default function page() {
    return (
        <section className='bg-[#F7F9FB] container pt-32 text-[#27272A]'>
            <div>
                <TitleContainer
                    title="PRICE & PLANNING"
                    subtitle="Packages and pallets, big and small, we can offer you instant delivery options for your shipping needs, both domestically and internationally. Fill out your shipment details below and we’ll provide services tailored to your specific requirements. Simply pick the option that suits you best, and continue to book."
                />
                <div className='flex justify-between mt-10 p-10 text-opacity-80'>
                    <form className='w-[50%] border-r-2 pr-20'>
                        <InputSection number='1.' title='Profile Shipper'>
                            <InputContainer head='Name'>
                                <InputField type='text' title='Name' />
                            </InputContainer>
                            <div className='flex gap-5'>
                                {profileFields.map((f, i) => (
                                    <InputContainer head={f.head} key={i}>
                                        <InputField type={f.type} title={f.title} />
                                    </InputContainer>
                                ))}
                            </div>
                        </InputSection>

                        <InputSection number='2.' title='Enter Origin And Destination'>
                            {destination.map((d, i) => (
                                <div className='flex gap-5' key={i}>
                                    <div className='flex w-full flex-col gap-5'>
                                        <InputContainer head={d.head}>
                                            <InputField type='text' title='Country/city' />
                                        </InputContainer>
                                        <InputContainer head='Postal Code'>
                                            <InputField type='text' title='e.g 10002' />
                                        </InputContainer>
                                    </div>
                                    <InputContainer head='Full address'>
                                        <TextArea title='south xxxx' />
                                    </InputContainer>
                                </div>
                            ))}
                            <label>
                                <input type="checkbox" />
                                This is a residential address
                            </label>
                        </InputSection>

                        <InputSection number='3.' title='Good Details'>
                            <div className='flex gap-5'>
                                <InputContainer head='Weight'>
                                    <InputField type='text' title='Weight' />
                                </InputContainer>
                                <InputContainer head='Category Product'>
                                    <DropContainer>
                                        <DropItem option='Category Product' />
                                        {categoryProduct.map((c, i) => (
                                            <DropItem key={i} option={c.category} />
                                        ))}
                                    </DropContainer>
                                </InputContainer>
                            </div>
                            <InputContainer head='Dimension'>
                                <div className='flex gap-3 justify-between'>
                                    {dimension.map((m, i) => (
                                        <div key={i}>
                                            <InputField type='text' title={m.title} />
                                            <p>cm*</p>
                                        </div>
                                    ))}
                                </div>
                            </InputContainer>
                        </InputSection>
                        <div className='text-right mb-3'>
                            <p>Total Shipment Weight: 1,2 kg</p>
                            <label>
                                <input type="checkbox" />
                                Shipment contains exclusively documents
                            </label>
                        </div>
                        <Button className='w-full'>Ship Now</Button>
                    </form>

                    <aside className='w-[45%]'>
                        <TitleContainer title='Your Delivery Options' subtitle='Review & Select a delevery Service to start booking yot shippment' />
                        <div>
                            <div className='flex gap-5 mt-10'>
                                <InputContainer head='Date'>
                                    <InputField type='date' title='12 September 2023' />
                                </InputContainer>
                                <InputContainer head='Shipping Type'>
                                    <DropContainer>
                                        <DropItem option='Shipping Type' />
                                        {transports.map((c, i) => (
                                            <DropItem key={i} option={c.category} />
                                        ))}
                                    </DropContainer>
                                </InputContainer>
                            </div>
                        </div>
                        <div className='bg-white mt-10 p-5 rounded-lg border border-[#A2A2A2]'>
                            <ImageItem src='/order/image 1.png' alt='image' className='w-auto mx-auto' />
                            <div className='border-t border-[#A2A2A2]'>
                                <div className='flex mx-auto justify-center gap-3 w-full pt-10'>
                                    <div>
                                        <ImageItem src='/order/box-time.svg' alt='image' className='bg-primary rounded-full p-3' />
                                    </div>
                                    <div className='text-xs w-1/2'>
                                        <p>Estimated delivery</p>
                                        <h4 className='font-bold text-base'>Sunday, 12 October 2023</h4>
                                        <p className='text-ellipsis whitespace-nowrap overflow-hidden'>Book by 9/12/2023 by 14:45 for pick-up today</p>
                                    </div>
                                </div>
                                <div className='py-10'>
                                    <h5 className='font-bold'>Including the service</h5>
                                    <ul className='text-sm list-disc px-5'>
                                        {list.map((l, i) => (
                                            <li key={i}>{l.content}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='px-3 mx-auto'>
                                    <div className='flex justify-between'>
                                        <p className='opacity-80 text-sm'>Included tax</p>
                                        <h5 className='font-bold text-lg'>IDR 1,589,225.00*</h5>
                                    </div>
                                    <Button className='w-full my-3'>Continue To Book</Button>
                                    <div className='w-full justify-center flex'>
                                        {banks.map((p, i) => (
                                            <ImageItem src={p.image} key={i} alt='image' className='w-auto p-2' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-10'>
                            <p className='text-xs text-center opacity-80'>
                                * Please note that this is not an offer to conclude a shipment contract but a non-binding
                                price indication only. A shipment contract may be exclusively concluded via the booking
                                tool on a basis of the respective terms and conditions as defined in the booking tool.
                                Price and transit time quoted are indicative only and might differ from the actual price
                                and transit time depending on the concretely booked shipment and the information you
                                provide in the booking tool. In particular prices might not include duties, taxes,
                                custom charges, storage fees or any other surcharges and fees.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
