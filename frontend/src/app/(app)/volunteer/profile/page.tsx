"use client"
import { useEffect, useState } from "react"
import { volunteerAPI } from "@/lib/api"

type VolunteerProfile = {
  name: string
  email: string
  year?: number
  credits?: number
  totalActivities?: number
  enrollmentNumber?: string
  joiningDate?: string
}

const Profile = () => {
  const [profile, setProfile] = useState<VolunteerProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await volunteerAPI.getProfile()
        setProfile(res.data)
      } catch (err) {
        setProfile(null)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>
  }

  if (!profile) {
    return <div className="flex justify-center items-center h-full text-red-500">Failed to load profile.</div>
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">Volunteer Profile</h1>
      <div className="space-y-4">
        <div>
          <span className="font-semibold">Name:</span> {profile.name}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {profile.email}
        </div>
        {profile.enrollmentNumber && (
          <div>
            <span className="font-semibold">Enrollment Number:</span> {profile.enrollmentNumber}
          </div>
        )}
        {profile.year !== undefined && (
          <div>
            <span className="font-semibold">Year:</span> {profile.year}
          </div>
        )}
        {profile.credits !== undefined && (
          <div>
            <span className="font-semibold">Credits:</span> {profile.credits}
          </div>
        )}
        {profile.totalActivities !== undefined && (
          <div>
            <span className="font-semibold">Total Activities:</span> {profile.totalActivities}
          </div>
        )}
        {profile.joiningDate && (
          <div>
            <span className="font-semibold">Joining Date:</span> {new Date(profile.joiningDate).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile