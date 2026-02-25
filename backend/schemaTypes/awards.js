import { defineField, defineType } from "sanity"

export const awards = defineType(
    {
        name:'awards',
        title:'Awards',
        type: 'document',
        fields:[defineField({
                name:'name',
                title:'Name',
                type:'string'
            }),
            defineField({
                name:'issuer',
                title:'Issuer',
                type:'string'
            }),
            defineField({
                name:'description',
                title:'Description',
                type:'string'
            }),
            defineField({
                name:'year',
                title:'Year',
                type:'string'
            }),
            defineField({
                name:'imgUrl',
                title:'ImgUrl',
                type: 'image',
                options: {
                hotspot: true,
                },
            }),
        ]
    }
)