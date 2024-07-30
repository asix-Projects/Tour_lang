import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");

	const handleSubmit = (event:any) => {
		event.preventDefault();
		onSubmit({ name, phone });
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-8 rounded-lg">
				<h2 className="text-2xl mb-4">Buyurtma berish</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700">Ism:</label>
						<input
							type="text"
							className="w-full p-2 border border-gray-300 rounded"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700">Telefon raqam:</label>
						<input
							type="tel"
							className="w-full p-2 border border-gray-300 rounded"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							required
						/>
					</div>
					<div className="flex justify-end">
						<button type="button" className="mr-4 p-2 bg-gray-500 text-white rounded" onClick={onClose}>
							Cancel
						</button>
						<button type="submit" className="p-2 bg-green-500 text-white rounded">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
