"use client"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<VolunteerData>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "year",
        header: "Year"
    },
    {
        accessorKey: "total_activities",
        header: "Total Activities"
    },
    {
        accessorKey: "credits",
        header: "Credits"
    }
]
