import LegendLabel from "./LegendLabel"

export default function LegendClock() {
    return (
        <div>
            <svg className="inline" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24.6123" cy="24.611" r="16.9999" transform="rotate(-1.63361 24.6123 24.611)" fill="#D9D9D9"/>
                <path d="M24.124 7.60732C27.0949 7.52371 30.0357 8.22042 32.6533 9.62797L24.6022 24.6004L24.124 7.60732Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M32.6919 9.64819C35.3059 11.0624 37.5035 13.1371 39.0655 15.6656L24.6029 24.6002L32.6919 9.64819Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M39.1425 15.7959C40.6817 18.3382 41.5276 21.2397 41.5957 24.2109L24.6003 24.6004L39.1425 15.7959Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M41.5977 24.254C41.6583 27.2254 40.9388 30.1608 39.511 32.7674L24.6014 24.6005L41.5977 24.254Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M39.4559 32.8693C38.0103 35.4661 35.9093 37.6385 33.3622 39.17L24.6023 24.6009L39.4559 32.8693Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M33.3261 39.1917C30.7751 40.7168 27.8689 41.5464 24.8974 41.5978L24.6031 24.6005L33.3261 39.1917Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M25.0775 41.5945C22.1066 41.6778 19.1659 40.9807 16.5484 39.5729L24.6013 24.6013L25.0775 41.5945Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M16.5052 39.5522C13.8913 38.1377 11.694 36.0627 10.1323 33.5341L24.5959 24.6011L16.5052 39.5522Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M10.0589 33.4038C8.51994 30.8613 7.67442 27.9597 7.60667 24.9884L24.6021 24.6009L10.0589 33.4038Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M7.60369 24.9457C7.54347 21.9743 8.26329 19.039 9.69139 16.4326L24.6001 24.6012L7.60369 24.9457Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M9.74909 16.3307C11.1949 13.7341 13.2963 11.5619 15.8435 10.0307L24.6017 24.6009L9.74909 16.3307Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
                <path d="M15.8794 10.0088C18.4306 8.48407 21.3368 7.65481 24.3084 7.60371L24.6007 24.601L15.8794 10.0088Z" fill="#E8E5E1" stroke="white" strokeWidth="0.5"/>
            </svg>
            <LegendLabel label={"12 horas"} />
        </div>
    )
};