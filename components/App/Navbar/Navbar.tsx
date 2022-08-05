import AppDrawerToggleButton from '@components/App/Drawer/ToggleButton';
import AppTitle from '../Title';
import { DownloadIcon, AdjustmentsIcon, CashIcon, ExternalLinkIcon, CodeIcon } from '@heroicons/react/outline';
import { DotsVerticalIcon } from '@heroicons/react/solid';

function AppNavbar() {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-none'>
				<AppDrawerToggleButton />
			</div>
			<div className='flex-1'>
				<AppTitle placement='NAVBAR' />
			</div>
			<div className='flex-none gap-4'>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-square m-1'>
						<DotsVerticalIcon className='w-6 h-6' />
					</label>
					<ul
						tabIndex={0}
						className='dropdown-content menu p-2 mt-4 drop-shadow-md bg-base-100 rounded-box w-52'
					>
						<li className='menu-title'>
							<span>General</span>
						</li>
						<li>
							<label htmlFor='download-modal' className='modal-button'>
								<DownloadIcon className='w-6 h-6' />
								Download
							</label>
						</li>
						<li className='disabled'>
							{/*htmlFor='settings-modal'*/}
							<label className='modal-buton flex items-center'>
								<AdjustmentsIcon className='w-6 h-6' />
								Settings
								<div className='badge badge-sm badge-primary'>Soon</div>
							</label>
						</li>
						<li className='menu-title'>
							<span>More</span>
						</li>
						<li>
							<a
								href='https://www.github.com/trbnhck/warp-theme'
								target='_blank'
								rel='noopener noreferrer'
							>
								<CodeIcon className='w-6 h-6 inline' />
								GitHub
								<ExternalLinkIcon className='w-4 h-4 ml-auto' />
							</a>
						</li>
						<li>
							<a href='https://www.buymeacoffee.com/haack' target='_blank' rel='noopener noreferrer'>
								<CashIcon className='w-6 h-6 inline' />
								Donate
								<ExternalLinkIcon className='w-4 h-4 ml-auto' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AppNavbar;
