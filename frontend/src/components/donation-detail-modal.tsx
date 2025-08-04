import { useState } from "react"
import Image from "next/image"
import { adminAPI } from "@/lib/api"

export default function DonationDetailModal({ donation, onClose }: { donation: any, onClose: () => void }) {
  const [showCredits, setShowCredits] = useState(false)
  const [credits, setCredits] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleApprove = async () => {
    setLoading(true)
    setError("")
    try {
      await adminAPI.approveDonation({ donationid: donation._id, credits })
      onClose()
    } catch (e) {
      setError("Failed to approve donation")
    } finally {
      setLoading(false)
    }
  }

  const handleReject = async () => {
    // Optionally implement reject logic
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full relative border-2 border-gray-100 shadow-2xl">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold mb-4">Donation Details</h2>
        <div className="space-y-2">
          <div><b>Volunteer Name:</b> {donation.volunteer}</div>
          <div><b>Mess Name:</b> {donation.mess}</div>
          <div><b>Food Type:</b> {donation.foodtype}</div>
          <div><b>Date:</b> {donation.donationdate && new Date(donation.donationdate).toLocaleString()}</div>
          <div><b>Quantity:</b> {donation.quantity}</div>
          <div><b>To be Consumed Before:</b> {donation.bestbefore}</div>
          <div><b>Category:</b> {donation.category}</div>
          <div><b>Description:</b> {donation.description}</div>
          {donation.imgurl && (
            <div>
              <b>Photo Proof:</b>
              <Image src={donation.imgurl} alt="Photo Proof" width={300} height={200} className="rounded mt-2" />
            </div>
          )}
        </div>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        {!showCredits ? (
          <div className="flex gap-4 mt-6">
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setShowCredits(true)}>Approve</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleReject}>Reject</button>
          </div>
        ) : (
          <div className="mt-6">
            <label className="block mb-2 font-semibold">Assign Credits</label>
            <input
              type="number"
              min={0}
              value={credits}
              onChange={e => setCredits(Number(e.target.value))}
              className="border px-2 py-1 rounded w-full mb-2"
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded w-full"
              onClick={handleApprove}
              disabled={loading}
            >
              {loading ? "Approving..." : "Approve"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}