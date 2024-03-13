import Asuransi from "../../icon/asuransi.svg";
import Servis from "../../icon/jaminan.svg";
import Jaminan from "../../icon/terjamin.svg";
import FreeAdmin from "../../icon/freeadmin.svg";

import React from "react";
import Image from "next/image";

const CardBenefits = () => {
	return (
		<div className="flex flex-col   mt-12 mb-20 gap-y-10">
			<div className="flex gap-x-3  mobile:flex-col  gap-y-3">
				{/* <IconUserHeart size={50} stroke={1} /> */}
				<Image src={Asuransi} alt="ini iconnya" width={56} />
				<div className="flex flex-col gap-y-1 col-span-4 ">
					<h1 className="font-semibold text-xl">Asuransi Khusus Penyewa</h1>
					<p>
						Perlindungan selama ngekos atas kompensasi kehilangan barang dan
						kerusakan fasilitas pada unit kamar. <br /> Disediakan oleh PT Great
						Eastern Insurance Indonesia. Syarat & Ketentuan berlaku.
					</p>
				</div>
			</div>
			<div className="flex gap-x-3  mobile:flex-col  gap-y-3">
				<Image src={Servis} alt="ini iconnya" width={45} />
				{/* <IconUserShield size={50} stroke={1} /> */}
				<div className="flex flex-col gap-y-1 col-span-4 ">
					<h1 className="font-semibold text-xl">Pro Service</h1>
					<p>
						Ditangani secara profesional oleh tim Mamikos. Selama kamu ngekos di
						sini, ada tim dari Mamikos yang akan <br /> merespon saran dan
						komplainmu.
					</p>
				</div>
			</div>
			<div className="flex gap-x-3  mobile:flex-col  gap-y-3">
				<Image src={Jaminan} alt="ini iconnya" width={45} />
				{/* <IconCircleCheck size={50} stroke={1} /> */}
				<div className="flex flex-col gap-y-1 col-span-4 ">
					<h1 className="font-semibold text-xl">
						Dikelola Hunian, Terjamin Nyaman
					</h1>
					<p>
						Kos ini operasionalnya dikelola dan distandardisasi oleh Mamikos.
					</p>
				</div>
			</div>
			<div className="flex gap-x-3  mobile:flex-col  gap-y-3">
				<Image src={FreeAdmin} alt="ini iconnya" width={45} />
				{/* <IconFreeRights size={50} stroke={1} /> */}
				<div className="flex flex-col gap-y-1 col-span-4 ">
					<h1 className="font-semibold text-xl">Bebas Biaya Admin</h1>
					<p>
						Kamu tidak akan dikenakan biaya admin saat melakukan pembayaran di
						Mamikos
					</p>
				</div>
			</div>
		</div>
	);
};

export default CardBenefits;
