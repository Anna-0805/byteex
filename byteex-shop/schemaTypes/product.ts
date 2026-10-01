export default {
  name: 'landingPage',
  title: 'Landing Page Content',
  type: 'document',
  fields: [
    {
      name: 'announcementDesktop',
      title: 'Announcement Text (Desktop)',
      type: 'string',
      initialValue: 'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)   |   FREE SHIPPING on orders > $200   |   easy 45 day return window.',
    },
    {
      name: 'announcementMobile',
      title: 'Announcement Text (Mobile)',
      type: 'string',
      initialValue: 'FREE SHIPPING on orders > $200',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroImages',
      title: 'Hero Images (Gallery)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
       {
  name: 'heroReviewTextDesktop',
  title: 'Hero Review Text (Desktop)',
  type: 'text',
  description: 'If left empty, the same text will be shown on desktop as on mobile.',
},

    {
  name: 'heroReviewTextMobile',
  title: 'Hero Review Text (Mobile)',
  type: 'text',
  description: 'If left empty, the same text will be shown on mobile as on desktop.',
},
    {
      name: 'features',
      title: 'Features List (Первый блок)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            { name: 'description', title: 'Feature Description', type: 'text' },
            { name: 'icon', title: 'Feature Icon', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },
    {
      name: 'asSeenInTitle',
      title: 'As Seen In Title',
      type: 'string',
      initialValue: 'as seen in',
    },
    {
      name: 'asSeenIn',
      title: 'As Seen In Logos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },


    {
      name: 'proudTitle',
      title: 'Proud Section Title',
      type: 'string',
      initialValue: 'Loungewear you can be proud of.',
    },
    {
      name: 'proudFeatures',
      title: 'Proud Section Features (Иконки + Текст)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'image', options: { hotspot: true } },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'proudGallery',
      title: 'Proud Section Gallery (Слайдер фоток)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },


    {
      name: 'aboutImages',
      title: 'About Images (Gallery)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'storyTitle',
      title: 'Story Title',
      type: 'string',
    },
    {
      name: 'storyText',
      title: 'Story Text',
      type: 'text',
    },
    {
      name: 'comfortFeatures',
      title: 'Comfort Made Easy Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'icon', title: 'Icon', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },
    {
      name: 'fansPhotos',
      title: 'Fans Photos Grid',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
     {
      name: 'reviews',
      title: 'Customer Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'author', title: 'Author Name', type: 'string' },
            { name: 'comment', title: 'Comment', type: 'text' },
            { name: 'rating', title: 'Rating (1-5)', type: 'number' },
          ],
        },
      ],
    },
    {
      name: 'faq',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text' },
          ],
        },
      ],
    },

    {
      name: 'faqImages',
      title: 'FAQ Section Images (Gallery Right)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },

    {
  name: 'impactSection',
  title: 'Impact Section (Green banner)',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our total green impact',
    },
    {
      name: 'items',
      title: 'Impact Items (3 blocks)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'image', options: { hotspot: true } },
            { name: 'value', title: 'Bold Text (Значення, напр: 3,927 kg)', type: 'string' },
            { name: 'label', title: 'Small Text (Підпис, напр: of CO2 saved)', type: 'string' },
          ],
        },
      ],
    },
  ],
    },
    
    {
  name: 'finalCtaSection',
  title: 'Final CTA Section',
  type: 'object',
  fields: [
    { name: 'title', title: 'Section Title', type: 'string', initialValue: 'Find something you love.' },
    { name: 'subtitle', title: 'Section Subtitle', type: 'text', initialValue: 'Lorem ipsum dolor sit amet...' },
    { name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Customize Your Outfit' },
    { name: 'buttonLink', title: 'Button Link (URL)', type: 'string', initialValue: '/customize' },
    { name: 'imageLeft', title: 'Left Photo', type: 'image', options: { hotspot: true } },
    { name: 'imageCenter', title: 'Center Photo', type: 'image', options: { hotspot: true } },
    { name: 'imageRight', title: 'Right Photo', type: 'image', options: { hotspot: true } },
    { name: 'reviewsText', title: 'Reviews Text (Mobile & Trust)', type: 'string', initialValue: 'Over 500+ 5 Star Reviews Online' },
    
    { 
  name: 'shipsText', 
  title: 'Shipping Status Text', 
  type: 'string', 
  initialValue: 'Ships in 1-2 Days',
  description: 'Text next to the clock icon under the button (e.g., Ships in 1-2 Days)' 
},

{
  name: 'paymentIcons',
  title: 'Payment Icons',
  type: 'image',
},

    {
      name: 'perks',
      title: 'Desktop Perks (3 blocks with icon + text)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon (SVG / Image)', type: 'image', options: { hotspot: true } },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        },
      ],
    },
  ],
}
   
  ],
}