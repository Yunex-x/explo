"use client";

import { useEffect, useState } from "react";

const countries = [
    "United States",
    "United Kingdom",
    "France",
    "Germany",
    "Spain",
    "Italy",
    "Morocco",
    "Canada",
    "Australia",
];

export default function LeaveReviewModal({
    onClose,
}: {
    onClose: () => void;
}) {
    const [rating, setRating] = useState(0);
    const [country, setCountry] = useState("");
    const [service, setService] = useState("");
    const [name, setName] = useState("");
    const [project, setProject] = useState("");
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // disable scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div
            className="w-[604px] rounded-[12px] bg-white p-[32px] relative z-10"
            onClick={(e) => e.stopPropagation()}
        >
            {error && (
                <div className="mb-4 text-red-500 text-[13px]">{error}</div>
            )}
            {submitted && (
                <div className="mb-4 text-green-600 text-[13px]">Thank you for your review!</div>
            )}
            {/* Header */}
            <div className="flex items-center justify-between mb-[32px]">
                <h2 className="text-[20px] font-medium uppercase text-[#1E1E1E]">
                    Rate Your Experience
                </h2>
                <button
                    onClick={onClose}
                    className="text-[22px] leading-none text-[#1E1E1E]"
                >
                    ×
                </button>
            </div>

            {/* Rating */}
            <div className="mb-[32px]">
                <p className="text-[14px] font-medium uppercase text-[#1E1E1E] mb-[12px]">
                    Your Rating
                </p>

                <div className="flex gap-[8px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill={star <= rating ? "#F5C451" : "#D9D9D9"}
                            >
                                <path d="M12 2L14.9 8.62L22 9.27L16.8 13.97L18.3 21L12 17.3L5.7 21L7.2 13.97L2 9.27L9.1 8.62L12 2Z" />
                            </svg>
                        </button>
                    ))}
                </div>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-[26px]">
                {/* Name */}
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="border-b border-[#D9D9D9] pb-[10px] text-[13px] uppercase outline-none"
                />

                {/* Country */}
                <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="
            border-b border-[#D9D9D9]
            pb-[8px]
            text-[13px]
            uppercase
            bg-transparent
            outline-none
            w-fit
            min-w-[180px]
          "
                >
                    <option value="" disabled>
                        Select Country
                    </option>
                    {countries.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>

                {/* Project */}
                <input
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    placeholder="Project Name"
                    className="border-b border-[#D9D9D9] pb-[10px] text-[13px] uppercase outline-none"
                />

                {/* Service */}
                <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="
            border-b border-[#D9D9D9]
            pb-[8px]
            text-[13px]
            uppercase
            bg-transparent
            outline-none
            w-fit
            min-w-[180px]
          "
                >
                    <option value="" disabled>
                        Select Service
                    </option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                </select>

                {/* Comment */}
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Leave a comment"
                    className="
            border-b border-[#D9D9D9]
            pb-[50px]
            text-[13px]
            uppercase
            resize-none
            outline-none
          "
                />
            </div>

            {/* Submit */}
            <div className="mt-[40px] flex justify-end">
                <button
                    className="relative bg-[#1E1E1E] px-[28px] py-[12px] rounded-[8px] text-[14px] uppercase text-white"
                    onClick={() => {
                        // Simple validation
                        if (!name || !country || !project || !service || !comment || rating === 0) {
                            setError("Please fill in all fields and select a rating.");
                            setSubmitted(false);
                            return;
                        }
                        setError("");
                        setSubmitted(true);
                        // Here you would send the data to your backend or API
                        // Example: fetch('/api/review', { method: 'POST', body: JSON.stringify({ name, country, project, service, comment, rating }) })
                    }}
                    disabled={submitted}
                >
                    Submit Review
                    <span className="absolute inset-x-0 -bottom-[8px] mx-auto w-[120px] h-[18px] bg-gradient-to-r from-[#8B63E8] to-[#60B7E3] blur-[14px]" />
                </button>
            </div>
        </div>
    );
}
