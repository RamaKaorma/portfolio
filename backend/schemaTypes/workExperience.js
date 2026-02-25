import { defineField, defineType } from "sanity"

export const workExperience = defineType(
    {
        name:'workExperience',
        title:'Work Experience',
        type:'document',
        fields:[defineField({name:'name',
                title:'name',
                type:'string'
             }),
             defineField({
                 name:'desc',
                 title:'Desc',
                 type:'string'
             }),
             defineField({
                name:'file',
                title:'File',
                type: 'file',
                options: {
                    hotspot: true,
                },
            }),
        ]
    }
)