import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

export const StatsRadar = (({data, captions}) => {
    const options = {
      dots: true,
      captionProps:
        () => ({
          fontFamily: 'Pixelade',
          fontSize: 18,
          textAnchor: 'middle'
        }),
        dotProps:
        () => ({
          className: 'dot !fill-poke-purple-200'
        })
    }
    return (
      <div className='flex justify-center'>
        <RadarChart
            captions={captions}
            data={data}
            options={options}
            size={400}
          />
      </div>
    )
})
