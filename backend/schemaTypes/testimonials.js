import { defineField, defineType } from "sanity"

export const testimonials = defineType(
    {
        name: 'testimonials',
        title: 'Testimonials',
        type: 'document',
        fields: [defineField({
                name: 'name',
                title: 'Name',
                type: 'string'
            }),
            defineField({
                name: 'company',
                title: 'Company',
                type: 'string'
            }),
            defineField({
                name: 'imgurl',
                title: 'ImgURL',
                type: 'image',
                options: {
                    hotspot: true, // Allows user to crop & edit their image before uploading
                }
            }),
            defineField({
                name: 'feedback',
                title: 'Feedback',
                type: 'string'
            }),
        ]
    }
)