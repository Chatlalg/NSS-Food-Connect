"use client"
import { ColumnDef } from "@tanstack/react-table"
import { VolunteerData } from "@/types/VolunteerTable"

export const columns: ColumnDef<VolunteerData>[] = [
    {
        accessorKey: "name",
        header: "Name",
        filterFn: 'includesString',
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
